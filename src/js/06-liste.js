/* ===== Page Projets : vue liste et bascule grille / liste =====
   La vue liste est une bande horizontale de grandes cartes, en defilement
   infini, alimentee par les memes projets que la grille (lus une seule fois
   par le moteur de collage). Un bouton fixe a droite passe d'une vue a l'autre.

   Les cartes sont posees une a une par transform : la bande n'a pas de largeur
   reelle, chaque carte reboucle de l'autre cote quand elle sort de l'ecran.

   Reglages : CS.config.liste (01-core.js). */
(function () {
  var L = CS.config.liste;
  if (!L || L.pages.indexOf(CS.page) === -1) return;

  var racine, cartes = [], projets = [], bouton, curseur;
  var cible = 0, courant = 0, anime = false;
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
      '<span class="cs-liste__int">' +
        '<span class="cs-liste__nom"></span>' +
        '<span class="cs-liste__cadre"><img class="cs-liste__img" alt="" loading="lazy" draggable="false"></span>' +
      '</span>';
    a.querySelector('.cs-liste__nom').textContent = p.nom;
    var img = a.querySelector('img');
    img.src = p.src;
    if (p.srcset) img.srcset = p.srcset;
    img.alt = p.alt || p.nom;
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

  function boucle() {
    courant += (cible - courant) * L.souplesse;
    if (Math.abs(cible - courant) < 0.1) { courant = cible; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  /* ---- Entrees ---- */
  function brancher() {
    racine.addEventListener('wheel', function (e) {
      e.preventDefault();
      /* molette verticale ou geste horizontal du trackpad : le plus marque l'emporte */
      var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      cible += d * (e.deltaMode === 1 ? 16 : 1) * L.vitesse;
      relancer();
    }, { passive: false });

    var tireDepuis = null, deplace = 0;
    racine.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      tireDepuis = e.clientX; deplace = 0;
      racine.classList.add('is-tire');
    });
    racine.addEventListener('pointermove', function (e) {
      if (tireDepuis === null) return;
      var d = e.clientX - tireDepuis;
      deplace += Math.abs(d);
      cible -= d * L.vitesseTactile;
      tireDepuis = e.clientX;
      relancer();
    });
    function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
    racine.addEventListener('pointerup', relacher);
    racine.addEventListener('pointercancel', relacher);
    racine.addEventListener('click', function (e) {
      if (deplace > L.seuilClic) { e.preventDefault(); e.stopPropagation(); }
      deplace = 0;
    }, true);
    racine.addEventListener('dragstart', function (e) { e.preventDefault(); });

    window.addEventListener('keydown', function (e) {
      if (vue !== 'liste') return;
      var d = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -1, ArrowDown: 1, PageUp: -3, PageDown: 3 }[e.key];
      if (d === undefined) return;
      e.preventDefault(); cible += d * pas; relancer();
    });

    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t); t = setTimeout(mesurer, 150);
    }, { passive: true });
  }

  /* ---- Curseur « Decouvrir » (souris uniquement) ---- */
  function poserCurseur() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    curseur = document.createElement('div');
    curseur.className = 'cs-curseur';
    curseur.setAttribute('aria-hidden', 'true');
    curseur.innerHTML =
      '<span class="cs-curseur__int">' +
        '<svg class="cs-curseur__rond" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor">' +
          '<circle cx="8" cy="8" r="7" stroke-opacity=".35"/>' +
          '<path d="M8 1a7 7 0 0 1 7 7" stroke-linecap="round"/>' +
        '</svg>' +
        '<span class="cs-curseur__texte"></span>' +
      '</span>';
    curseur.querySelector('.cs-curseur__texte').textContent = L.libelles.curseur;
    document.body.appendChild(curseur);

    /* Le transform est pose sur l'element lui-meme, a chaque mouvement : le
       curseur doit coller au pointeur, sans lissage. */
    racine.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      curseur.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
      var sur = !!(e.target.closest && e.target.closest('.cs-liste__cadre'));
      curseur.classList.toggle('is-visible', sur && !racine.classList.contains('is-tire'));
    });
    racine.addEventListener('pointerleave', function () { curseur.classList.remove('is-visible'); });
  }

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

  function demarrer() {
    projets = (CS.collage && CS.collage.projets) || [];
    if (!projets.length) return;

    racine = document.createElement('div');
    racine.className = 'cs-liste';
    document.body.appendChild(racine);

    bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'cs-vue-bascule';
    bouton.addEventListener('click', function () {
      var v = vue === 'grille' ? 'liste' : 'grille';
      retenirVue(v);
      appliquer(v, false);
    });
    document.body.appendChild(bouton);

    mesurer();
    brancher();
    poserCurseur();
    appliquer(lireVue(), true);
  }

  /* Le collage lit la liste CMS : on attend qu'il ait fini. */
  if (CS.collage && CS.collage.racine) demarrer();
  else document.addEventListener('cs:collage-pret', demarrer, { once: true });
})();
