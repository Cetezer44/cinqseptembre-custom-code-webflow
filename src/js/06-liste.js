/* ===== Page Projets : vue liste et bascule grille / liste =====
   La vue liste est une bande horizontale de grandes cartes, en defilement
   infini, alimentee par les memes projets que la grille (lus une seule fois
   par le moteur de collage, declare juste avant). Un bouton fixe a droite
   passe d'une vue a l'autre.

   Les cartes sont posees une a une par transform : la bande n'a pas de largeur
   reelle, chaque carte reboucle de l'autre cote quand elle sort de l'ecran.

   Reglages : CS.config.liste (01-core.js). */
CS.module('liste', CS.config.liste.pages, function (ctx) {
  var L = CS.config.liste;
  var projets = (CS.collage && CS.collage.projets) || [];
  if (!projets.length) return;

  var racine, cartes = [], bouton, curseur;
  var cible = 0, courant = 0, anime = false, vivant = true;
  var largeur = 0, pas = 0, total = 0;
  var vue = 'grille';
  var CLE = 'cs-vue-projets';

  /* ---- Memoire de la vue (le temps de la session) ---- */
  function lireVue() {
    if (L.memoriser) {
      try { var v = sessionStorage.getItem(CLE); if (v === 'grille' || v === 'liste') return v; } catch (e) {}
    }
    return L.vueParDefaut === 'liste' ? 'liste' : 'grille';
  }
  function retenirVue(v) {
    if (!L.memoriser) return;
    try { sessionStorage.setItem(CLE, v); } catch (e) {}
  }

  /* ---- Construction ---- */
  function creerCarte(p) {
    var a = document.createElement('a');
    a.className = 'cs-liste__carte';
    a.href = p.href;
    a.draggable = false;
    a.innerHTML =
      '<span class="cs-liste__int"><span class="cs-liste__echelle">' +
        '<span class="cs-liste__nom"></span>' +
        '<span class="cs-liste__cadre"><img class="cs-liste__img" alt="" loading="lazy" draggable="false"></span>' +
      '</span></span>';
    a.querySelector('.cs-liste__nom').textContent = p.nom;
    var img = a.querySelector('img');
    img.src = p.src;
    if (p.srcset) img.srcset = p.srcset;
    img.alt = p.alt || p.nom;
    a._echelle = a.querySelector('.cs-liste__echelle');
    racine.appendChild(a);
    return a;
  }

  /* Assez de cartes pour couvrir l'ecran plus une de marge de chaque cote :
     avec peu de projets, la liste est repetee. */
  function mesurer() {
    var h = Math.round(window.innerHeight * L.partHauteur);
    largeur = Math.round(h * L.carte.w / L.carte.h);
    pas = largeur + L.ecart;
    racine.style.setProperty('--cs-carte-w', largeur + 'px');
    racine.style.setProperty('--cs-carte-h', h + 'px');
    racine.style.setProperty('--cs-liste-bas', L.bas + 'px');

    var besoin = Math.ceil((window.innerWidth + 2 * pas) / pas);
    while (cartes.length < besoin || cartes.length % projets.length !== 0) {
      cartes.push(creerCarte(projets[cartes.length % projets.length]));
    }
    total = cartes.length * pas;
    placer();
  }

  function placer() {
    var depart = L.decalage * largeur;
    for (var i = 0; i < cartes.length; i++) {
      var x = ((i * pas - courant) % total + total) % total;   // 0 .. total
      if (x > total - pas) x -= total;                         // la derniere repasse a gauche
      cartes[i]._x = x + depart;
      cartes[i].style.transform = 'translate3d(' + (x + depart).toFixed(1) + 'px,0,0)';
    }
  }

  /* Dezoom au defilement. La vitesse est mesuree en pixels par image a 60 i/s ;
     n ramene chaque image a cette base, pour que l'effet soit le meme sur un
     ecran a 120 Hz ou quand une image saute. */
  var Z = L.dezoom, dezoomActif = Z && Z.actif && !CS.reduit();
  var echelle = 1, echelleAppliquee = 1, tPrec = 0;
  function amorti(k, n) { return 1 - Math.pow(1 - k, n); }

  function boucle(t) {
    if (!vivant) return;
    var n = tPrec ? Math.min(4, Math.max(0.25, (t - tPrec) / (1000 / 60))) : 1;
    tPrec = t;

    var avant = courant;
    if (Math.abs(cible - courant) < 0.1) courant = cible;
    else courant += (cible - courant) * amorti(L.souplesse, n);
    placer();

    if (dezoomActif) {
      var vitesse = Math.abs(courant - avant) / n;
      var visee = Math.max(Z.echelleMin, 1 - vitesse * Z.parPixel);
      echelle += (visee - echelle) * amorti(Z.souplesse, n);
      if (visee === 1 && 1 - echelle < 0.0002) echelle = 1;
      if (echelle !== echelleAppliquee) {
        echelleAppliquee = echelle;
        var tr = echelle === 1 ? '' : 'scale(' + echelle.toFixed(4) + ')';
        for (var i = 0; i < cartes.length; i++) cartes[i]._echelle.style.transform = tr;
      }
    }

    if (courant !== cible || echelle !== 1) requestAnimationFrame(boucle);
    else { anime = false; tPrec = 0; }
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  /* ---- Bascule ---- */
  function entreeCartes() {
    if (CS.reduit()) return;
    /* Decalage d'entree de gauche a droite, sur les seules cartes visibles */
    var visibles = cartes.filter(function (c) { return c._x < window.innerWidth && c._x + largeur > 0; })
                         .sort(function (a, b) { return a._x - b._x; });
    cartes.forEach(function (c) { c.style.removeProperty('--cs-i'); });
    visibles.forEach(function (c, i) { c.style.setProperty('--cs-i', i); });
    racine.dataset.etat = 'avant';
    void racine.offsetWidth;            // fige l'etat de depart avant de lancer la transition
    racine.dataset.etat = 'entree';
  }

  function appliquer(v, immediat) {
    vue = v;
    var grille = CS.collage && CS.collage.racine;
    document.documentElement.setAttribute('data-cs-vue', v);
    if (CS.collage) CS.collage.actif = (v === 'grille');
    if (grille) { grille.inert = (v !== 'grille'); grille.setAttribute('aria-hidden', v !== 'grille'); }
    racine.inert = (v !== 'liste');
    racine.setAttribute('aria-hidden', v !== 'liste');
    bouton.textContent = v === 'grille' ? L.libelles.versListe : L.libelles.versGrille;
    if (curseur) curseur.classList.remove('is-visible');
    if (v === 'liste' && !immediat) entreeCartes();
  }

  /* ---- Mise en place ---- */
  racine = document.createElement('div');
  racine.className = 'cs-liste';
  ctx.conteneur.appendChild(racine);

  bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'cs-vue-bascule';
  ctx.ecoute(bouton, 'click', function () {
    var v = vue === 'grille' ? 'liste' : 'grille';
    retenirVue(v);
    appliquer(v, false);
  });
  ctx.conteneur.appendChild(bouton);

  ctx.aLaSortie(function () {
    vivant = false;
    document.documentElement.removeAttribute('data-cs-vue');
  });

  mesurer();

  /* ---- Entrees ---- */
  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    /* molette verticale ou geste horizontal du trackpad : le plus marque l'emporte */
    var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    cible += d * (e.deltaMode === 1 ? 16 : 1) * L.vitesse;
    relancer();
  }, { passive: false });

  var tireDepuis = null, deplace = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tireDepuis = e.clientX; deplace = 0;
    racine.classList.add('is-tire');
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (tireDepuis === null) return;
    var d = e.clientX - tireDepuis;
    deplace += Math.abs(d);
    cible -= d * L.vitesseTactile;
    tireDepuis = e.clientX;
    relancer();
  });
  function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > L.seuilClic) { e.preventDefault(); e.stopPropagation(); }
    deplace = 0;
  }, true);
  ctx.ecoute(racine, 'dragstart', function (e) { e.preventDefault(); });

  ctx.ecoute(window, 'keydown', function (e) {
    if (vue !== 'liste') return;
    var d = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -1, ArrowDown: 1, PageUp: -3, PageDown: 3 }[e.key];
    if (d === undefined) return;
    e.preventDefault(); cible += d * pas; relancer();
  });

  var t;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(t); t = setTimeout(mesurer, 150);
  }, { passive: true });

  /* ---- Curseur « Decouvrir » ---- */
  curseur = CS.curseur(ctx, racine, L.libelles.curseur, 'rond', function (e) {
    return e.target.closest && e.target.closest('.cs-liste__cadre') && !racine.classList.contains('is-tire');
  });

  appliquer(lireVue(), true);
});
