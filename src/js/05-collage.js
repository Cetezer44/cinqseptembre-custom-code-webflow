/* ===== Collage en defilement infini =====
   Accueil et page Projets partagent ce moteur. Il lit une liste CMS posee dans
   Webflow, repartit les projets dans les 11 emplacements du motif de la
   maquette, et fait defiler ce motif sans fin.

   Pourquoi pas la barre de defilement du navigateur : une boucle vraiment
   infinie demanderait soit une page demesurement haute, soit des sauts de
   position visibles. On ecoute donc la molette et le toucher, et on deplace la
   piste nous-memes, ce qui permet de recycler les repetitions hors de l'ecran.

   Reglages : CS.config.collage (01-core.js). */
CS.module('collage', CS.config.collage.pages, function (ctx) {
  var C = CS.config.collage;
  var racine, piste, motifs = [], projets = [];
  var cible = 0, courant = 0, anime = false, vivant = true;
  var hMotif = 0;   // hauteur d'une repetition
  var hPas = 0;     // distance entre deux repetitions = hMotif + marge de raccord

  CS.collage = { actif: false, racine: null, projets: [] };

  /* ---- Lecture de la liste CMS ---- */
  var src = ctx.conteneur.querySelector(C.source) || document.querySelector(C.source);
  if (src) {
    projets = Array.prototype.map.call(src.querySelectorAll(C.item), function (el) {
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
  if (!projets.length) return;   // pas de liste CMS : on ne fait rien

  /* La liste CMS d'origine ne sert qu'a fournir les donnees : on la retire de
     l'affichage, ainsi que l'ancien cadre de mosaique s'il est encore la. */
  var cadre = (C.cadre && src.closest(C.cadre)) || src;
  cadre.style.display = 'none';
  cadre.setAttribute('aria-hidden', 'true');
  Array.prototype.forEach.call(ctx.conteneur.querySelectorAll('.canvas-zoom'), function (e) { e.style.display = 'none'; });

  /* ---- Construction d'une repetition du motif ---- */
  function construireMotif(rang) {
    var m = document.createElement('div');
    m.className = 'cs-collage__motif';
    m.dataset.rang = rang;
    C.cases.forEach(function (c) {
      var a = document.createElement('a');
      a.className = 'cs-collage__case';
      a.style.left   = (c.x / C.motif.w * 100) + '%';
      a.style.top    = (c.y / C.motif.h * 100) + '%';
      a.style.width  = (c.w / C.motif.w * 100) + '%';
      a.style.height = (c.h / C.motif.h * 100) + '%';
      a.innerHTML = '<img class="cs-collage__img" alt="">';
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
      a._src = p.src;              // lu par le calque de deformation
      if (p.nom) a.setAttribute('aria-label', p.nom);   // le nom n'est plus affiche, il reste lu
    });
  }

  /* ---- Mise en page ---- */
  function mesurer() {
    /* part de la largeur d'ecran : celle de la maquette, puis un peu plus sur grand ecran */
    var vw = window.innerWidth, part = C.partLargeur, G = C.grandEcran;
    if (G && vw > G.de) part += (G.part - C.partLargeur) * Math.min(1, (vw - G.de) / (G.a - G.de));
    var large = Math.min(vw * part, C.largeurMax);
    racine.style.setProperty('--cs-motif-w', large + 'px');
    hMotif = large * (C.motif.h / C.motif.w);
    hPas = hMotif + large * (C.margeRaccord / C.motif.w);

    var besoin = Math.ceil(window.innerHeight / hPas) + 2;
    while (motifs.length < besoin) motifs.push(construireMotif(motifs.length));
    motifs.forEach(remplir);
    lMotif = large;
    xMotif = (window.innerWidth - large) / 2;
    majDeformation();
    placer();
    demanderRendu();
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
      m._y = y;
      m.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    });
  }

  function boucle() {
    if (!vivant) return;
    courant += (cible - courant) * C.souplesse;
    if (Math.abs(cible - courant) < 0.1) { courant = cible; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } demanderRendu(); }

  /* ---- Deformation au defilement ----
     Le calque WebGL est glisse SOUS les cases : les liens, le nom au survol et
     le clic restent ceux du DOM. Une case dont la texture est prete recoit
     data-gl, qui rend son <img> invisible ; les autres gardent leur <img>.
     Sans WebGL, sur petit ecran ou si l'utilisateur prefere moins de
     mouvement, rien de tout cela n'est cree. */
  var D = C.deformation, gl = null, toile = null, glActif = false;
  var entreeEnCours = false;
  var lMotif = 0, xMotif = 0;
  var enRendu = false, tPrec = 0, yPrec = 0, intensite = 0, survol = null;

  function majDeformation() {
    if (!gl) return;
    glActif = window.innerWidth >= D.largeurMin;
    toile.style.display = glActif ? '' : 'none';
    if (glActif) gl.taille(window.innerWidth, window.innerHeight);
    else liberer();
  }
  function liberer() {
    Array.prototype.forEach.call(racine.querySelectorAll('[data-gl]'), function (a) { a.removeAttribute('data-gl'); });
  }

  function rendre(t) {
    enRendu = false;
    if (!vivant || !glActif) return;
    /* Pendant l'entree en masque, ce sont les <img> qui se devoilent : le
       calque attend, il prendra le relais sur des images deja en place. */
    if (entreeEnCours) { gl.dessiner([], 0); return; }
    var dt = Math.min(100, Math.max(1, t - (tPrec || t)));
    tPrec = t;

    /* intensite : vitesse de defilement lissee, montee rapide, descente lente */
    var vitesse = Math.abs(courant - yPrec) / dt * 1000;
    yPrec = courant;
    var viseeI = anime ? Math.min(vitesse / D.vitessePleine, 1) : 0;
    intensite += (viseeI - intensite) * (1 - Math.exp(-dt / (viseeI > intensite ? D.montee : D.descente)));
    if (intensite < 0.002 && viseeI === 0) intensite = 0;

    var vh = window.innerHeight, liste = [], zoomEnCours = false;
    var kz = 1 - Math.pow(0.86, dt / 16.67);
    motifs.forEach(function (m) {
      Array.prototype.forEach.call(m.children, function (a, i) {
        var c = C.cases[i];
        var y = m._y + c.y / C.motif.h * hMotif, h = c.h / C.motif.h * hMotif;
        var vz = a === survol ? D.zoomSurvol : 1;
        a._zoom = a._zoom || 1;
        if (Math.abs(vz - a._zoom) > 0.0005) { a._zoom += (vz - a._zoom) * kz; zoomEnCours = true; } else a._zoom = vz;
        if (y + h < 0 || y > vh) { if (a.hasAttribute('data-gl')) a.removeAttribute('data-gl'); return; }
        liste.push({ cle: a, url: a._src, x: xMotif + c.x / C.motif.w * lMotif + (a._fx || 0), y: y + (a._fy || 0), w: c.w / C.motif.w * lMotif, h: h, zoom: a._zoom });
      });
    });

    var dessinees = gl.dessiner(liste, D.force * intensite);
    liste.forEach(function (o) {
      var pret = dessinees.indexOf(o.cle) !== -1;
      if (pret !== o.cle.hasAttribute('data-gl')) { if (pret) o.cle.setAttribute('data-gl', ''); else o.cle.removeAttribute('data-gl'); }
    });

    if (anime || intensite > 0 || zoomEnCours || gl.enAttente()) demanderRendu();
    else tPrec = 0;
  }
  function demanderRendu() {
    if (!glActif || enRendu) return;
    enRendu = true;
    requestAnimationFrame(rendre);
  }

  /* ---- Mise en place ---- */
  racine = document.createElement('div');
  racine.className = 'cs-collage';
  piste = document.createElement('div');
  piste.className = 'cs-collage__piste';
  racine.appendChild(piste);
  ctx.conteneur.appendChild(racine);

  if (D && D.pages.indexOf(ctx.page) !== -1 && !CS.reduit() && CS.creerDeformation) {
    toile = document.createElement('canvas');
    toile.className = 'cs-collage__gl';
    toile.setAttribute('aria-hidden', 'true');
    gl = CS.creerDeformation(toile, function () { demanderRendu(); });
    if (gl) {
      racine.insertBefore(toile, piste);
      /* contexte perdu (pilote, mise en veille) : on rend la main aux <img> */
      ctx.ecoute(toile, 'webglcontextlost', function (e) { e.preventDefault(); glActif = false; liberer(); toile.style.display = 'none'; });
      ctx.ecoute(racine, 'pointerover', function (e) {
        if (e.pointerType !== 'mouse') return;
        survol = e.target.closest ? e.target.closest('.cs-collage__case') : null;
        demanderRendu();
      });
      ctx.ecoute(racine, 'pointerleave', function () { survol = null; demanderRendu(); });
    } else toile = null;
  }

  document.documentElement.classList.add('cs-sans-defilement');
  ctx.aLaSortie(function () {
    vivant = false;
    if (gl) gl.detruire();
    document.documentElement.classList.remove('cs-sans-defilement');
    CS.collage = null;
  });
  mesurer();

  /* ---- Entrees ---- */
  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    cible += e.deltaY * (e.deltaMode === 1 ? 16 : 1) * C.vitesse;
    relancer();
  }, { passive: false });

  var tireDepuis = null, deplace = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tireDepuis = e.clientY; deplace = 0;
    racine.classList.add('is-tire');
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (tireDepuis === null) return;
    var d = e.clientY - tireDepuis;
    deplace += Math.abs(d);
    cible -= d * C.vitesseTactile;
    tireDepuis = e.clientY;
    relancer();
  });
  function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);
  /* Un glissement n'ouvre pas le projet : seul un vrai clic compte. */
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > C.seuilClic) { e.preventDefault(); e.stopPropagation(); }
    deplace = 0;
  }, true);

  /* Clic sur un projet : on retient d'ou part l'image, pour la transition
     vers la page projet (09-barba.js). */
  ctx.ecoute(racine, 'click', function (e) {
    if (e.defaultPrevented) return;
    var a = e.target.closest ? e.target.closest('.cs-collage__case') : null;
    if (!a) return;
    var r = a.getBoundingClientRect();
    CS.origineProjet = { x: r.left, y: r.top, w: r.width, h: r.height, src: a._src, quand: Date.now() };
  });

  ctx.ecoute(window, 'keydown', function (e) {
    if (!CS.collage || !CS.collage.actif) return;
    var pas = { ArrowUp: -120, ArrowDown: 120, PageUp: -600, PageDown: 600 }[e.key];
    if (pas === undefined) return;
    e.preventDefault(); cible += pas; relancer();
  });

  var t;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(t); t = setTimeout(mesurer, 150);
  }, { passive: true });

  /* ---- Entree des images en masque ----
     Les cases visibles sont masquees, puis se devoilent l'une apres l'autre,
     de haut en bas. Sur l'accueil on attend la fin du loader ; ailleurs on
     joue des l'arrivee. */
  var EN = C.entree;
  if (EN && EN.actif && !CS.reduit()) {
    entreeEnCours = true;
    racine.dataset.entree = 'avant';
    racine.style.setProperty('--cs-entree-duree', EN.duree + 'ms');
    racine.style.setProperty('--cs-entree-decalage', EN.decalage + 'ms');
    var jouee = false;
    var jouerEntree = function () {
      if (jouee || !vivant) return;
      jouee = true;
      var vh = window.innerHeight;
      var visibles = Array.prototype.slice.call(racine.querySelectorAll('.cs-collage__case'))
        .map(function (a) { return { a: a, r: a.getBoundingClientRect() }; })
        .filter(function (o) { return o.r.bottom > 0 && o.r.top < vh; })
        .sort(function (x, y) { return x.r.top - y.r.top; });
      visibles.forEach(function (o, i) { o.a.style.setProperty('--cs-e', i); });
      void racine.offsetWidth;                  // fige l'etat masque avant de lancer
      racine.dataset.entree = 'joue';
      setTimeout(function () {
        if (!vivant) return;
        delete racine.dataset.entree;
        visibles.forEach(function (o) { o.a.style.removeProperty('--cs-e'); });
        entreeEnCours = false;
        demanderRendu();                        // le calque WebGL prend le relais
      }, EN.duree * 1.3 + EN.decalage * Math.max(0, visibles.length - 1) + 60);   // 1,3 = l'image finit de se poser
    };
    if (document.documentElement.classList.contains('cs-loader-actif')) {
      ctx.ecoute(document, 'cs:loader-fini', jouerEntree);
      setTimeout(jouerEntree, 8000);            // filet : si le loader ne finit jamais
    } else {
      requestAnimationFrame(function () { requestAnimationFrame(jouerEntree); });
    }
  }

  /* ---- Flottement a la souris ----
     Le decalage est pose sur chaque case (le lien), donc la zone de clic et le
     nom au survol suivent ; le calque WebGL lit le meme decalage. */
  var FL = CS.config.flottement;
  CS.flottement(ctx, function (fx, fy) {
    motifs.forEach(function (m) {
      Array.prototype.forEach.call(m.children, function (a, i) {
        var p = FL.profondeurs[i % FL.profondeurs.length];
        a._fx = -fx * FL.amplitude * p;
        a._fy = -fy * FL.amplitude * p;
        a.style.transform = 'translate3d(' + a._fx.toFixed(2) + 'px,' + a._fy.toFixed(2) + 'px,0)';
      });
    });
    demanderRendu();
  });

  /* ---- Curseur « Decouvrir » au survol d'une image ---- */
  if (C.libelleCurseur && CS.curseur(ctx, racine, C.libelleCurseur, 'rond', function (e) {
    return e.target.closest && e.target.closest('.cs-collage__case') && !racine.classList.contains('is-tire');
  })) racine.classList.add('a-curseur');

  /* ---- Logo fixe au centre, en difference (accueil) ---- */
  if (C.logoPages && C.logoPages.indexOf(ctx.page) !== -1) {
    var d = document.createElement('div');
    d.className = 'cs-collage-logo';
    d.innerHTML =
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--cinq">' + CS.svg.cinq + '</span>' +
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--septembre">' + CS.svg.septembre + '</span>';
    ctx.conteneur.appendChild(d);
  }

  /* Expose aux autres modules (vue liste de la page Projets).
     actif = false quand une autre vue a la main : le clavier ne pilote plus la grille. */
  CS.collage = { actif: true, racine: racine, projets: projets };
});
