/* ===== Collage en defilement infini =====
   Accueil et page Projets partagent ce moteur. Il lit une liste CMS cachee
   posee dans Webflow, repartit les projets dans les 11 emplacements du motif
   de la maquette, et fait defiler ce motif sans fin.

   Pourquoi pas la barre de defilement du navigateur : une boucle vraiment
   infinie demanderait soit une page demesurement haute, soit des sauts de
   position visibles. On ecoute donc la molette et le toucher, et on deplace la
   piste nous-memes, ce qui permet de recycler les repetitions hors de l'ecran.

   Reglages : CS.config.collage (01-core.js). */
(function () {
  var C = CS.config.collage;
  if (!C || C.pages.indexOf(CS.page) === -1) return;

  var racine, piste, motifs = [], projets = [];
  var cible = 0, courant = 0, anime = false;
  var hMotif = 0;   // hauteur d'une repetition
  var hPas = 0;     // distance entre deux repetitions = hMotif + marge de raccord

  /* ---- Lecture de la liste CMS ---- */
  function lireSource() {
    var src = document.querySelector(C.source);
    if (!src) return [];
    return Array.prototype.map.call(src.querySelectorAll(C.item), function (el) {
      var img = el.querySelector('img');
      return {
        href: el.getAttribute('href') || el.dataset.href || '#',
        src: img ? (img.currentSrc || img.src) : '',
        srcset: img ? img.getAttribute('srcset') : null,
        alt: img ? (img.getAttribute('alt') || '') : '',
        nom: (el.dataset.nom || el.getAttribute('aria-label') ||
              ((C.nom && el.querySelector(C.nom)) || {}).textContent || '').trim()
      };
    }).filter(function (p) { return p.src; });
  }

  /* ---- Construction d'une repetition du motif ---- */
  function construireMotif(rang) {
    var m = document.createElement('div');
    m.className = 'cs-collage__motif';
    m.dataset.rang = rang;
    C.cases.forEach(function (c, i) {
      var a = document.createElement('a');
      a.className = 'cs-collage__case';
      a.style.left   = (c.x / C.motif.w * 100) + '%';
      a.style.top    = (c.y / C.motif.h * 100) + '%';
      a.style.width  = (c.w / C.motif.w * 100) + '%';
      a.style.height = (c.h / C.motif.h * 100) + '%';
      a.innerHTML = '<img class="cs-collage__img" alt=""><span class="cs-collage__nom"></span>';
      m.appendChild(a);
    });
    piste.appendChild(m);
    return m;
  }

  /* Remplit une repetition avec le bloc de projets correspondant a son rang.
     Le decalage par rang evite que deux repetitions voisines se ressemblent. */
  function remplir(m) {
    var rang = +m.dataset.rang;
    var n = projets.length;
    Array.prototype.forEach.call(m.children, function (a, i) {
      var p = projets[(((rang * C.cases.length + i) % n) + n) % n];
      var img = a.querySelector('img');
      if (img.getAttribute('src') !== p.src) {
        img.src = p.src;
        if (p.srcset) img.srcset = p.srcset;
        img.alt = p.alt || p.nom;
      }
      a.href = p.href;
      a.querySelector('.cs-collage__nom').textContent = p.nom;
    });
  }

  /* ---- Mise en page ---- */
  function mesurer() {
    var large = Math.min(window.innerWidth * C.partLargeur, C.largeurMax);
    racine.style.setProperty('--cs-motif-w', large + 'px');
    hMotif = large * (C.motif.h / C.motif.w);
    hPas = hMotif + large * (C.margeRaccord / C.motif.w);

    var besoin = Math.ceil(window.innerHeight / hPas) + 2;
    while (motifs.length < besoin) motifs.push(construireMotif(motifs.length));
    motifs.forEach(function (m) { remplir(m); });
    placer();
  }

  /* Recycle les repetitions sorties de l'ecran : celle qui passe au-dessus
     repart en bas avec le bloc de projets suivant. */
  function placer() {
    var vh = window.innerHeight, k = motifs.length;
    motifs.forEach(function (m) {
      var rang = +m.dataset.rang;
      var y = rang * hPas - courant;
      if (y + hMotif < -hPas) { rang += k; m.dataset.rang = rang; remplir(m); y = rang * hPas - courant; }
      else if (y > vh + hPas) { rang -= k; m.dataset.rang = rang; remplir(m); y = rang * hPas - courant; }
      m.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    });
  }

  function boucle() {
    courant += (cible - courant) * C.souplesse;
    if (Math.abs(cible - courant) < 0.1) { courant = cible; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  /* ---- Entrees ---- */
  function brancher() {
    racine.addEventListener('wheel', function (e) {
      e.preventDefault();
      cible += e.deltaY * (e.deltaMode === 1 ? 16 : 1) * C.vitesse;
      relancer();
    }, { passive: false });

    var tireDepuis = null, deplace = 0;
    racine.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      tireDepuis = e.clientY; deplace = 0;
      racine.classList.add('is-tire');
    });
    racine.addEventListener('pointermove', function (e) {
      if (tireDepuis === null) return;
      var d = e.clientY - tireDepuis;
      deplace += Math.abs(d);
      cible -= d * C.vitesseTactile;
      tireDepuis = e.clientY;
      relancer();
    });
    function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
    racine.addEventListener('pointerup', relacher);
    racine.addEventListener('pointercancel', relacher);
    /* Un glissement n'ouvre pas le projet : seul un vrai clic compte. */
    racine.addEventListener('click', function (e) {
      if (deplace > C.seuilClic) { e.preventDefault(); e.stopPropagation(); }
      deplace = 0;
    }, true);

    window.addEventListener('keydown', function (e) {
      if (!CS.collage.actif) return;
      var pas = { ArrowUp: -120, ArrowDown: 120, PageUp: -600, PageDown: 600 }[e.key];
      if (pas === undefined) return;
      e.preventDefault(); cible += pas; relancer();
    });

    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t); t = setTimeout(mesurer, 150);
    }, { passive: true });
  }

  /* ---- Logo fixe au centre, en difference ---- */
  function poserLogo() {
    if (!C.logoPages || C.logoPages.indexOf(CS.page) === -1) return;
    var d = document.createElement('div');
    d.className = 'cs-collage-logo';
    d.innerHTML =
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--cinq">' + CS.svg.cinq + '</span>' +
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--septembre">' + CS.svg.septembre + '</span>';
    document.body.appendChild(d);
  }

  function demarrer() {
    projets = lireSource();
    if (!projets.length) return;   // pas de liste CMS : on ne fait rien

    /* La liste CMS d'origine ne sert qu'a fournir les donnees : on la retire de
       l'affichage, ainsi que l'ancien cadre de mosaique s'il est encore la. */
    var src = document.querySelector(C.source);
    if (src) {
      var cadre = (C.cadre && src.closest(C.cadre)) || src;
      cadre.style.display = 'none';
      cadre.setAttribute('aria-hidden', 'true');
    }
    document.querySelectorAll('.canvas-zoom').forEach(function (e) { e.style.display = 'none'; });

    racine = document.querySelector(C.conteneur);
    if (!racine) {
      racine = document.createElement('div');
      racine.className = 'cs-collage';
      document.body.insertBefore(racine, document.body.firstChild);
    }
    racine.classList.add('cs-collage');
    piste = document.createElement('div');
    piste.className = 'cs-collage__piste';
    racine.appendChild(piste);

    document.documentElement.classList.add('cs-sans-defilement');
    mesurer();
    brancher();
    poserLogo();

    /* Expose aux autres modules (vue liste de la page Projets) */
    CS.collage.racine = racine;
    CS.collage.projets = projets;
    document.dispatchEvent(new CustomEvent('cs:collage-pret'));
  }

  /* actif = false quand une autre vue a la main : le clavier ne pilote plus la grille */
  CS.collage = { actif: true, racine: null, projets: [] };

  CS.pret(demarrer);
})();
