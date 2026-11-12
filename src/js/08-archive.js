/* ===== Page Archive : mosaique infinie et focus =====
   Les references de la collection « Bibliotheque » (Collection List du
   Designer) sont posees sur une trame reguliere qui se prolonge sans fin dans
   les deux directions. On s'y deplace en tirant, a la molette ou au clavier.

   La trame est virtuelle : seules les tuiles visibles existent (une « reserve »
   de colonnes x rangees). Chaque tuile de la reserve est reaffectee a une
   autre case de la trame quand elle sort de l'ecran. La reference affichee
   dans une case ne depend que de sa position : on retrouve la meme image en
   revenant au meme endroit.

   Un clic sur une tuile l'agrandit au centre ; les autres s'effacent, les
   informations apparaissent dessous. En focus, la molette et les fleches
   passent a la reference suivante ou precedente.

   Reglages : CS.config.archive (01-core.js). */
CS.module('archive', CS.config.archive.pages, function (ctx) {
  var A = CS.config.archive, F = A.focus;

  /* ---- Lecture de la Collection List ---- */
  var src = ctx.conteneur.querySelector(A.source);
  if (!src) return;
  function texte(el, sel) { var e = sel && el.querySelector(sel); return e ? e.textContent.trim() : ''; }
  var refs = Array.prototype.map.call(src.querySelectorAll(A.item), function (el) {
    var img = el.querySelector('img');
    return {
      src: img ? (img.getAttribute('src') || '') : '',
      srcset: img ? img.getAttribute('srcset') : null,
      nom: texte(el, A.champs.nom),
      type: texte(el, A.champs.type),
      annee: texte(el, A.champs.annee)
    };
  }).filter(function (r) { return r.src; });
  var n = refs.length;
  if (!n) return;

  function mod(a, b) { return ((a % b) + b) % b; }

  /* ---- Etat ---- */
  var racine, plan, tuiles = [], cols = 0, rangs = 0;
  var tw, th, px, py, ox, oy;                  // tuile, pas, origine — a l'echelle
  var camX = 0, camY = 0, cibleX = 0, cibleY = 0;
  var anime = false, vivant = true;
  var focusOuvert = false;

  racine = document.createElement('div');
  racine.className = 'cs-archive';
  plan = document.createElement('div');
  plan.className = 'cs-archive__plan';
  racine.appendChild(plan);
  ctx.conteneur.appendChild(racine);

  document.documentElement.classList.add('cs-sans-defilement');
  ctx.aLaSortie(function () {
    vivant = false;
    document.documentElement.classList.remove('cs-sans-defilement');
  });

  /* ---- Trame ---- */
  function creerTuile() {
    var t = document.createElement('div');
    t.className = 'cs-archive__tuile';
    t.setAttribute('role', 'button');
    t.tabIndex = 0;
    t.innerHTML = '<img class="cs-archive__img" alt="" draggable="false">';
    t._c = null; t._r = null; t._i = -1;
    plan.appendChild(t);
    return t;
  }

  function mesurer() {
    var e = Math.max(A.echelleMin, Math.min(A.echelleMax, window.innerWidth / A.base));
    tw = A.tuile.w * e; th = A.tuile.h * e;
    px = A.pas.x * e;   py = A.pas.y * e;
    ox = A.origine.x * e; oy = A.origine.y * e;
    racine.style.setProperty('--cs-tuile-w', tw.toFixed(2) + 'px');
    racine.style.setProperty('--cs-tuile-h', th.toFixed(2) + 'px');

    var c = Math.ceil(window.innerWidth / px) + 2;
    var r = Math.ceil(window.innerHeight / py) + 2;
    if (c !== cols || r !== rangs) {
      cols = c; rangs = r;
      while (tuiles.length < cols * rangs) tuiles.push(creerTuile());
      while (tuiles.length > cols * rangs) plan.removeChild(tuiles.pop());
      tuiles.forEach(function (t) { t._c = null; });      // force la reaffectation
    }
    placer();
  }

  /* La tuile i de la reserve tient toujours une colonne congrue a i modulo
     cols (idem pour les rangees) : elle ne change de case que lorsqu'elle sort
     d'un cote pour rentrer de l'autre. */
  function placer() {
    var c0 = Math.floor((camX - ox) / px) - 1;
    var r0 = Math.floor((camY - oy) / py) - 1;
    for (var k = 0; k < tuiles.length; k++) {
      var t = tuiles[k];
      var c = c0 + mod((k % cols) - c0, cols);
      var r = r0 + mod(Math.floor(k / cols) - r0, rangs);
      if (c !== t._c || r !== t._r) {
        t._c = c; t._r = r;
        var i = mod(c + r * A.melange, n);
        if (i !== t._i) {
          t._i = i;
          var img = t.firstChild, ref = refs[i];
          img.removeAttribute('srcset');
          img.src = ref.src;
          if (ref.srcset) { img.srcset = ref.srcset; img.sizes = Math.ceil(tw) + 'px'; }
          img.alt = ref.nom;
          t.setAttribute('aria-label', ref.nom);
        }
      }
      t._x = ox + c * px - camX;
      t._y = oy + r * py - camY;
      t.style.transform = 'translate3d(' + t._x.toFixed(1) + 'px,' + t._y.toFixed(1) + 'px,0)';
    }
  }

  function boucle() {
    if (!vivant) return;
    camX += (cibleX - camX) * A.souplesse;
    camY += (cibleY - camY) * A.souplesse;
    if (Math.abs(cibleX - camX) < 0.1 && Math.abs(cibleY - camY) < 0.1) { camX = cibleX; camY = cibleY; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  mesurer();

  /* ---- Deplacement ----
     Pendant qu'on tire, la trame suit le pointeur a l'identique (pas de
     lissage : c'est une manipulation directe). Au relachement, elle garde un
     peu de la vitesse du geste et se pose en douceur. */
  var tire = null, deplace = 0, vx = 0, vy = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (focusOuvert) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tire = { x: e.clientX, y: e.clientY, t: e.timeStamp, id: e.pointerId };
    deplace = 0; vx = vy = 0;
    cibleX = camX; cibleY = camY;                  // arrete net un elan en cours
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (!tire || e.pointerId !== tire.id) return;
    var dx = e.clientX - tire.x, dy = e.clientY - tire.y;
    var dt = Math.max(1, e.timeStamp - tire.t);
    deplace += Math.abs(dx) + Math.abs(dy);
    if (deplace > A.seuilClic && !racine.classList.contains('is-tire')) {
      racine.classList.add('is-tire');
      try { racine.setPointerCapture(tire.id); } catch (err) {}
    }
    /* vitesse lissee, en px/ms */
    vx = vx * 0.7 + (dx / dt) * 0.3;
    vy = vy * 0.7 + (dy / dt) * 0.3;
    camX -= dx; camY -= dy; cibleX = camX; cibleY = camY;
    tire.x = e.clientX; tire.y = e.clientY; tire.t = e.timeStamp;
    placer();
  });
  function relacher(e) {
    if (!tire) return;
    var arret = e.timeStamp - tire.t > 80;          // doigt immobile avant de lacher : pas d'elan
    tire = null;
    racine.classList.remove('is-tire');
    if (!arret && deplace > A.seuilClic && !CS.reduit()) {
      cibleX = camX - vx * A.elan;
      cibleY = camY - vy * A.elan;
      relancer();
    }
  }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);

  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    var k = (e.deltaMode === 1 ? 16 : 1) * A.vitesse;
    if (focusOuvert) { molletteFocus(e.deltaY * k + e.deltaX * k); return; }
    if (e.shiftKey && !e.deltaX) cibleX += e.deltaY * k;
    else { cibleX += e.deltaX * k; cibleY += e.deltaY * k; }
    relancer();
  }, { passive: false });

  ctx.ecoute(racine, 'dragstart', function (e) { e.preventDefault(); });

  var tr;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(tr);
    tr = setTimeout(function () { mesurer(); }, 150);
  }, { passive: true });

  /* ==================== Focus ==================== */
  var panneau = document.createElement('div');
  panneau.className = 'cs-archive__focus';
  panneau.setAttribute('role', 'dialog');
  panneau.setAttribute('aria-modal', 'true');
  panneau.hidden = true;
  panneau.innerHTML =
    '<div class="cs-archive__focus-centre"><div class="cs-archive__focus-cadre">' +
      '<img class="cs-archive__focus-img" alt="" draggable="false">' +
    '</div></div>' +
    '<div class="cs-archive__focus-infos">' +
      '<h2 class="cs-archive__focus-nom"></h2>' +
      '<p class="cs-archive__focus-type"></p>' +
      '<p class="cs-archive__focus-annee"></p>' +
    '</div>';
  racine.appendChild(panneau);
  var cadre = panneau.querySelector('.cs-archive__focus-cadre');
  var grande = panneau.querySelector('.cs-archive__focus-img');
  var infos = panneau.querySelector('.cs-archive__focus-infos');
  var elNom = panneau.querySelector('.cs-archive__focus-nom');
  var elType = panneau.querySelector('.cs-archive__focus-type');
  var elAnnee = panneau.querySelector('.cs-archive__focus-annee');

  var origine = null;        // tuile cliquee
  var courant = -1;          // reference affichee
  var animCadre = null;
  var EASE = 'cubic-bezier(0.77, 0, 0.175, 1)';     // --cs-ease-in-out

  function remplirFocus(i) {
    var ref = refs[i];
    courant = i;
    grande.removeAttribute('srcset');
    grande.src = ref.src;
    grande.alt = ref.nom;
    elNom.textContent = ref.nom;
    elType.textContent = ref.type;
    elAnnee.textContent = ref.annee;
    panneau.setAttribute('aria-label', ref.nom);
  }

  /* Transform qui ramene le cadre (a sa place finale) sur le rectangle d'une tuile */
  function versTuile(t) {
    var a = t.getBoundingClientRect(), b = cadre.getBoundingClientRect();
    if (!b.width || !b.height) return 'none';
    var dx = (a.left + a.width / 2) - (b.left + b.width / 2);
    var dy = (a.top + a.height / 2) - (b.top + b.height / 2);
    return 'translate(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px) scale(' +
           (a.width / b.width).toFixed(4) + ',' + (a.height / b.height).toFixed(4) + ')';
  }

  function ouvrir(t) {
    if (focusOuvert || t._i < 0) return;
    focusOuvert = true;
    origine = t;
    cibleX = camX; cibleY = camY;                   // la trame ne bouge plus
    remplirFocus(t._i);
    panneau.hidden = false;
    racine.classList.add('est-focus');
    t.classList.add('est-origine');
    if (animCadre) animCadre.cancel();
    if (!CS.reduit()) {
      animCadre = cadre.animate(
        [{ transform: versTuile(t) }, { transform: 'none' }],
        { duration: F.duree, easing: EASE });
    }
    void panneau.offsetWidth;
    panneau.classList.add('est-ouvert');
    panneau.tabIndex = -1;
    try { panneau.focus({ preventScroll: true }); } catch (e) {}
  }

  function fermer() {
    if (!focusOuvert) return;
    focusOuvert = false;
    panneau.classList.remove('est-ouvert');
    var t = origine, retour = t && t._i === courant && !CS.reduit();
    function fin() {
      panneau.hidden = true;
      if (t) { t.classList.remove('est-origine'); try { t.focus({ preventScroll: true }); } catch (e) {} }
      racine.classList.remove('est-focus', 'est-fermeture');
    }
    if (animCadre) animCadre.cancel();
    if (retour) {
      /* meme reference qu'a l'ouverture : l'image retourne dans sa case */
      animCadre = cadre.animate(
        [{ transform: 'none' }, { transform: versTuile(t) }],
        { duration: F.duree, easing: EASE, fill: 'forwards' });
      animCadre.onfinish = function () { fin(); animCadre.cancel(); };
      setTimeout(function () { racine.classList.remove('est-focus'); }, F.duree * 0.4);
    } else {
      /* on a change de reference entre-temps : simple fondu */
      racine.classList.add('est-fermeture');
      racine.classList.remove('est-focus');
      setTimeout(fin, 300);
    }
    if (curseur) curseur.classList.remove('is-visible');
  }

  /* Reference suivante / precedente : fondu enchaine de l'image et du texte */
  var dernier = 0, cumul = 0;
  function suivant(sens) {
    var maintenant = Date.now();
    if (maintenant - dernier < F.delaiSuivant) return;
    dernier = maintenant;
    var i = mod(courant + sens, n);
    var pre = new Image(); pre.src = refs[i].src;
    panneau.classList.add('est-change');
    setTimeout(function () {
      if (!focusOuvert) return;
      remplirFocus(i);
      panneau.classList.remove('est-change');
    }, 180);
  }
  function molletteFocus(d) {
    cumul += d;
    if (Math.abs(cumul) < 30) return;
    var sens = cumul > 0 ? 1 : -1; cumul = 0;
    suivant(sens);
  }

  /* Clic : sur une tuile -> ouvre ; en focus -> ferme. Un deplacement n'est pas un clic. */
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > A.seuilClic) { deplace = 0; return; }
    deplace = 0;
    if (focusOuvert) { fermer(); return; }
    var t = e.target.closest('.cs-archive__tuile');
    if (t) ouvrir(t);
  });

  /* En focus, au doigt : glisser vers le haut ou le bas change de reference */
  var touche = null;
  ctx.ecoute(panneau, 'pointerdown', function (e) { if (e.pointerType !== 'mouse') touche = e.clientY; });
  ctx.ecoute(panneau, 'pointerup', function (e) {
    if (touche === null) return;
    var d = e.clientY - touche; touche = null;
    if (Math.abs(d) > 50) { deplace = A.seuilClic + 1; suivant(d < 0 ? 1 : -1); }
  });

  ctx.ecoute(window, 'keydown', function (e) {
    if (focusOuvert) {
      if (e.key === 'Escape') { e.preventDefault(); fermer(); }
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); suivant(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); suivant(-1); }
      return;
    }
    var t = document.activeElement && document.activeElement.closest && document.activeElement.closest('.cs-archive__tuile');
    if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); ouvrir(t); return; }
    var d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!d) return;
    e.preventDefault();
    cibleX += d[0] * px; cibleY += d[1] * py; relancer();
  });

  var curseur = CS.curseur(ctx, racine, A.libelleFermer, 'croix', function () { return focusOuvert; });
});
