/* ===== Cinq Septembre — socle =====
   Charge par jsDelivr depuis le depot cinqseptembre-custom-code-webflow.
   Tous les reglages du site sont rassembles ici : c'est le seul endroit a
   modifier pour ajuster une duree, un seuil ou un selecteur. */
window.CS = window.CS || {};

/* Les deux mots du logotype, inlines a la construction depuis src/svg/.
   Partages par le loader et par le logo fixe du collage. */
CS.svg = {
  cinq:      /*@include:svg/cinq.svg*/'',
  septembre: /*@include:svg/septembre.svg*/''
};

CS.config = {
  /* ---- Loader ----
     Comme sur la maquette : CINQ et SEPTEMBRE apparaissent ecartes, devoiles
     par un masque qui remonte, puis se rapprochent jusqu'a former le logotype,
     a la place exacte de celui de l'accueil. Le voile s'efface alors et les
     images du collage font leur entree (voir collage.entree). */
  loader: {
    actif: true,
    pages: ['accueil'],   // pages ou le loader apparait ; [] = partout, null = nulle part
    uneFoisParSession: false,   // false = a chaque chargement de la page (pas aux retours par transition)
    apparition: 700,      // ms — les deux mots se devoilent en masque
    decalage: 120,        // ms — SEPTEMBRE part un peu apres CINQ
    pause: 150,           // ms — temps d'arret avant le rapprochement
    course: 900,          // ms — les mots se rejoignent
    repos: 150,           // ms — temps d'arret une fois le logo forme
    sortie: 400           // ms — disparition du voile
  },




  /* ---- Collage en defilement infini (accueil + page Projets) ----
     Le motif et les 11 emplacements sont repris au pixel de la maquette
     (groupe de 1206 x 3249 px). Les coordonnees sont celles du motif, pas de
     l'ecran : le JS les convertit en pourcentages. */
  collage: {
    pages: ['accueil', 'projets'],
    conteneur: '.cs-collage',      // cree si absent
    /* Le moteur lit la Collection List deja presente sur la page d'accueil
       (ancienne mosaique). Rien a recreer dans le Designer : il suffit que la
       liste soit liee a « Projets », l'image au champ « Image mosaique 1 »,
       le lien a la page du projet, et que le lien porte un attribut
       data-nom contenant le Name. */
    source: '.canvas-content, .collection-list-projet, .cs-source',
    item: '.canvas-item__link, .item-projet, .cs-source__item',
    nom: '.projet-name-cat, [data-cs-nom]',   // element portant le nom, a defaut de data-nom
    cadre: '.infinite-canvas, .container-projets',  // bloc d'origine a masquer
    logoPages: ['accueil'],        // logo fixe au centre : accueil seulement
    libelleCurseur: 'D\u00e9couvrir',   // curseur au survol d'une image ('' = pas de curseur)

    motif: { w: 1206, h: 3249 },
    /* Espace vertical ajoute entre deux repetitions. Sans lui, la derniere
       tuile du motif (en bas a gauche) et la premiere de la repetition
       suivante partagent exactement le bord a y 3249 et se touchent sur 73 px.
       160 px correspond a l'ecart le plus serre a l'interieur du motif : le
       raccord n'est donc pas plus serre qu'ailleurs. */
    margeRaccord: 160,
    partLargeur: 0.8375,           // 1206 / 1440 : le motif occupe 83,75 % de la largeur (maquette)
    /* Grands ecrans : la part de largeur monte progressivement, pour que les
       marges blanches ne grandissent pas avec l'ecran. 83,75 % jusqu'a 1440 px,
       92 % a partir de 1920 px, en pente douce entre les deux. */
    grandEcran: { de: 1440, a: 1920, part: 0.92 },
    largeurMax: 3200,              // px — plafond de la mosaique (ecrans tres larges)

    vitesse: 1,                    // molette
    vitesseTactile: 1.6,           // glissement au doigt
    souplesse: 0.1,                // lissage du defilement : 0,05 tres doux, 0,2 sec
    seuilClic: 8,                  // px — au-dela, le geste est un glissement, pas un clic

    /* Entree des images : chaque case visible se devoile par un masque qui
       remonte, l'une apres l'autre de haut en bas. Jouee apres le loader sur
       l'accueil, et a chaque arrivee sur une page a collage. */
    entree: {
      actif: true,
      duree: 900,                  // ms — devoilement d'une image
      decalage: 90                 // ms — ecart entre deux images
    },

    /* Deformation des images au defilement (voir 03-deformation.js).
       L'intensite suit la vitesse : nulle a l'arret, pleine a vitessePleine.
       Elle monte vite et retombe lentement, pour que l'effet « s'attarde ». */
    deformation: {
      pages: ['accueil', 'projets'], // accueil et grille des projets
      force: 0.032,                // etirement maximal aux bords haut et bas : 3,2 % (bybang.co : 4,86 %)
      vitessePleine: 800,          // px/s
      montee: 25,                  // ms
      descente: 175,               // ms
      largeurMin: 981,             // px — desactive en dessous (tablette, mobile)
      zoomSurvol: 1.04             // meme zoom au survol que la version sans WebGL
    },

    cases: [
      { x: 352, y:    0, w: 154, h: 214 },
      { x: 769, y:  214, w: 343, h: 229 },
      { x: 157, y:  399, w: 340, h: 439 },
      { x: 977, y:  604, w: 229, h: 321 },
      { x:  84, y: 1150, w: 172, h: 226 },
      { x: 887, y: 1319, w: 319, h: 440 },
      { x: 256, y: 1698, w: 301, h: 394 },
      { x: 780, y: 2040, w: 163, h: 227 },
      { x:   0, y: 2253, w: 325, h: 411 },
      { x: 965, y: 2664, w: 164, h: 227 },
      { x: 166, y: 2957, w: 259, h: 292 }
    ]
  },

  /* ---- Page Projets : vue liste + bascule grille / liste ----
     Bande horizontale de grandes cartes, en defilement infini, calee en bas
     de l'ecran. Mesures reprises de la maquette (cadre de 1440 x 1024). */
  liste: {
    pages: ['projets'],
    vueParDefaut: 'grille',        // 'grille' ou 'liste'
    memoriser: true,               // retient la vue le temps de la session
    carte: { w: 436, h: 628 },     // proportions d'une carte
    partHauteur: 0.6133,           // 628 / 1024 : hauteur de carte / hauteur d'ecran
    ecart: 10,                     // px entre deux cartes
    bas: 14,                       // px sous les cartes
    decalage: -0.28,               // la premiere carte depasse a gauche de 28 % de sa largeur
    vitesse: 1,
    vitesseTactile: 1.6,
    souplesse: 0.1,
    seuilClic: 8,
    /* Dezoom au defilement : chaque carte retrecit autour de son centre, d'autant
       plus que l'on defile vite, et reprend sa taille a l'arret. Les espaces
       entre les cartes s'ouvrent : la bande semble reculer. */
    dezoom: {
      actif: true,
      parPixel: 0.003,             // retrecissement par pixel parcouru en une image (a 60 i/s)
      echelleMin: 0.8,             // les cartes ne descendent jamais sous 80 %
      souplesse: 0.06              // amorti du retrecissement et du retour
    },
    libelles: { versListe: 'Vue liste', versGrille: 'Vue grille', curseur: 'D\u00e9couvrir' }
  },

  /* ---- Page Contact ---- */
  contact: {
    pages: ['contact'],
    retour: '/',                   // ou aller a la fermeture si l'on n'arrive pas du site
    libelleFermer: 'Fermer'
  },

  /* ---- Page Archive : mosaique infinie + focus ----
     Trame reguliere reprise de la maquette (cadre de 1440 px de large) :
     tuiles de 130 x 180, une tous les 276 px en largeur et 323 px en hauteur.
     Tout est mis a l'echelle de la largeur d'ecran, dans les bornes ci-dessous. */
  archive: {
    pages: ['archives'],
    source: '.cs-archive-source',          // Collection List « Bibliotheque » du Designer
    item: '.cs-archive-item',
    champs: { nom: '.cs-archive-item__nom', type: '.cs-archive-item__type', annee: '.cs-archive-item__annee' },

    base: 1440,                    // largeur de la maquette
    tuile: { w: 130, h: 180 },
    pas: { x: 276, y: 323 },
    origine: { x: 241, y: 255 },   // position d'une tuile de reference a l'ouverture
    echelleMin: 0.75,              // petit ecran : les tuiles ne descendent pas sous 97 px de large
    echelleMax: 1.35,              // tres grand ecran
    melange: 7,                    // decalage d'une rangee a l'autre dans l'ordre des references

    souplesse: 0.1,                // lissage (molette, elan)
    vitesse: 1,                    // molette
    elan: 260,                     // ms de vitesse conservee au relachement
    seuilClic: 8,                  // px — au-dela, le geste est un deplacement, pas un clic

    focus: {
      w: 344, h: 477,              // proportions de l'image agrandie
      duree: 600,                  // ms — agrandissement / retour
      delaiSuivant: 450            // ms mini entre deux references (fleches du clavier)
    },
    libelleFermer: 'Fermer'
  },

  /* ---- Flottement a la souris ----
     Sur les mosaiques, chaque image se decale de quelques pixels a l'oppose du
     pointeur. Chacune a sa « profondeur » : c'est l'ecart entre elles qui donne
     l'impression de flotter, pas le deplacement lui-meme. Souris uniquement,
     et rien si l'utilisateur prefere moins de mouvement. */
  flottement: {
    actif: true,
    pages: ['accueil', 'projets', 'archives'],
    amplitude: 12,                 // px — decalage maximal, pointeur au bord de l'ecran
    souplesse: 0.06,               // amorti : 0,03 tres flottant, 0,15 nerveux
    profondeurs: [0.55, 1, 0.8, 0.45, 0.7, 1, 0.6, 0.9, 0.5, 0.85, 0.65]   // part de l'amplitude, image par image
  },

  /* ---- Survol des liens texte ----
     Chaque lettre descend et sort par le bas de sa ligne pendant que sa jumelle
     entre par le haut, avec un decalage d'une lettre a la suivante. Souris
     uniquement. Le texte reste un vrai texte (lisible, selectionnable) : la
     jumelle est dessinee par la CSS, elle n'existe pas dans la page. */
  lettres: {
    actif: true,
    selecteur: '.cs-nav__lien, .cs-contact a, .cs-vue-bascule',
    duree: 420,                    // ms — course d'une lettre
    decalage: 16                   // ms — ecart entre deux lettres
  },

  /* ---- Page projet ----
     Le haut de page (image, titre, credits) et le Rich Text des photos sont
     dans le Designer. Ici : leur entree, le devoilement des blocs de photos
     au defilement et le leger glissement des images dans leur cadre. */
  projet: {
    pages: ['projet'],
    hero: '.cs-projet-hero',
    image: '.cs-projet-hero__image',           // cadre d'arrivee de l'image qui s'envole
    blocs: '.rt-composants-photos .composant-photo',   // blocs de photos devoiles au defilement
    seuil: 0.12,                   // part du bloc visible avant qu'il se devoile
    decalage: 140,                 // ms — ecart entre deux images d'un meme bloc
    cadre: '.photo-slot',          // cadre des images a parallaxe
    amplitude: 0.05                // glissement : part de la hauteur du cadre, de part et d'autre
  },

  /* ---- Transitions de page (Barba) ---- */
  transitions: {
    actif: true,
    sortie: 300,                   // ms — fondu de la page qui part
    entree: 450,                   // ms — fondu de la page qui arrive
    /* Contact : le panneau noir descend du haut comme un rideau, et remonte
       quand on quitte la page. Meme duree et meme courbe que la descente de
       la barre de navigation (01-base.css), pour qu'ils bougent ensemble. */
    rideau: 900,                   // ms
    logo: 200,                     // ms — le logo central de l'accueil s'efface avant le rideau
    /* Vers une page projet : l'image cliquee s'envole de sa place dans la
       mosaique (ou la liste) jusqu'a sa place en haut de la page projet. */
    vol: 900,                      // ms — trajet de l'image
    exclure: []                    // expressions regulieres de chemins a charger sans transition
  }
};



/* ---- Utilitaires ---- */
CS.reduit = function () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

CS.sourisFine = function () {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
};

CS.attendre = function (ms) {
  return new Promise(function (r) { setTimeout(r, ms); });
};

CS.pret = function (fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
};

/* Quelle page affiche-t-on ? Repose sur le slug de l'URL, pas sur le balisage,
   pour rester vrai meme si la structure Webflow change. */
CS.quellePage = function (chemin) {
  var p = (chemin || '').replace(/\/+$/, '');
  if (p === '' || p === '/index') return 'accueil';
  if (p.indexOf('/projets/') === 0) return 'projet';
  if (p === '/projets') return 'projets';
  if (p === '/archive' || p === '/archives' || p === '/bibliotheque') return 'archives';
  if (p === '/contact') return 'contact';
  if (p === '/approche' || p === '/a-propos') return 'approche';
  return p.replace(/^\//, '').replace(/\//g, '-') || 'autre';
};
CS.page = CS.quellePage(location.pathname);

/* ===== Cycle de vie des pages =====
   Avec Barba, les pages se remplacent sans rechargement : un module ne peut
   plus se contenter de demarrer une fois. Chaque module se declare avec
   CS.module(nom, pages, init). A chaque arrivee sur une page, CS.entrer()
   appelle init(ctx) pour les modules concernes ; au depart, CS.sortir()
   defait tout ce qu'ils ont branche.

   ctx.conteneur     element de la page (conteneur Barba) : tout ce qu'un
                     module cree y est ajoute, et disparait donc avec la page
   ctx.ecoute(...)   addEventListener retire automatiquement au depart
   ctx.aLaSortie(fn) nettoyage libre (arreter une boucle, retirer une classe) */
CS._modules = [];
/* Une file de pages, et non une seule : pendant certaines transitions (le
   rideau de Contact) la page qui arrive s'installe alors que celle qui part
   est encore a l'ecran. CS.sortir() demonte toujours la plus ancienne. */
CS._pages = [];

CS.module = function (nom, pages, init) {
  CS._modules.push({ nom: nom, pages: pages, init: init });
};

CS.entrer = function (conteneur) {
  CS.page = CS.quellePage(location.pathname);
  var h = document.documentElement;
  h.className = h.className.replace(/(^|\s)cs-page-\S+/g, ' ').replace(/\s+/g, ' ').trim();
  h.classList.add('cs-page-' + CS.page);

  var nettoyages = [];
  CS._pages.push(nettoyages);
  var ctx = {
    page: CS.page,
    conteneur: conteneur || document.body,
    ecoute: function (cible, type, fn, options) {
      cible.addEventListener(type, fn, options);
      nettoyages.push(function () { cible.removeEventListener(type, fn, options); });
    },
    aLaSortie: function (fn) { nettoyages.push(fn); }
  };
  CS._modules.forEach(function (m) {
    if (m.pages && m.pages.indexOf(CS.page) === -1) return;
    try { m.init(ctx); } catch (e) { if (window.console) console.error('[CS] ' + m.nom, e); }
  });
};

CS.sortir = function () {
  var n = CS._pages.shift() || [];
  n.forEach(function (fn) { try { fn(); } catch (e) {} });
};

/* ---- Flottement a la souris ----
   Suit le pointeur avec un amorti et appelle appliquer(x, y) tant que la valeur
   bouge ; x et y vont de -1 (bord gauche / haut) a 1 (bord droit / bas).
   Le module appelant decide quoi deplacer. Rend null si l'effet ne s'applique
   pas (pas de souris, mouvement reduit, page non concernee). */
CS.flottement = function (ctx, appliquer) {
  var F = CS.config.flottement;
  if (!F || !F.actif || F.pages.indexOf(ctx.page) === -1) return null;
  if (!CS.sourisFine() || CS.reduit()) return null;
  var vx = 0, vy = 0, x = 0, y = 0, enCours = false, vivant = true;
  function boucle() {
    enCours = false;
    if (!vivant) return;
    x += (vx - x) * F.souplesse;
    y += (vy - y) * F.souplesse;
    var pose = Math.abs(vx - x) < 0.0005 && Math.abs(vy - y) < 0.0005;
    if (pose) { x = vx; y = vy; }
    appliquer(x, y);
    if (!pose) lancer();
  }
  function lancer() { if (!enCours) { enCours = true; requestAnimationFrame(boucle); } }
  ctx.ecoute(window, 'pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    vx = e.clientX / window.innerWidth * 2 - 1;
    vy = e.clientY / window.innerHeight * 2 - 1;
    lancer();
  }, { passive: true });
  /* le pointeur quitte la fenetre : tout revient doucement a sa place */
  ctx.ecoute(document.documentElement, 'pointerleave', function () { vx = 0; vy = 0; lancer(); });
  ctx.aLaSortie(function () { vivant = false; });
  return true;
};

/* ---- Curseur personnalise (souris uniquement) ----
   Une pastille + un mot qui suivent le pointeur au-dessus d'une zone.
   Le transform de suivi est pose sur l'element lui-meme, a chaque mouvement :
   le curseur doit coller au pointeur, sans lissage. L'apparition est jouee
   sur son contenu, pour ne pas se melanger au suivi.
   estDessus(e) dit si le curseur doit etre visible a cet endroit. */
CS.ICONES = {
  /* anneau discret en fond + le meme cercle, qui se trace quand le curseur apparait
     (pathLength="1" : le trait se pilote de 0 a 1, quelle que soit la taille) */
  rond:  '<circle cx="8" cy="8" r="7" stroke-opacity=".35"/>' +
         '<circle class="cs-curseur__trace" cx="8" cy="8" r="7" pathLength="1" transform="rotate(-90 8 8)"/>',
  croix: '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5"/>'
};
CS.curseur = function (ctx, zone, texte, icone, estDessus) {
  if (!CS.sourisFine()) return null;
  var c = document.createElement('div');
  c.className = 'cs-curseur';
  c.setAttribute('aria-hidden', 'true');
  c.innerHTML =
    '<span class="cs-curseur__int">' +
      '<svg class="cs-curseur__rond" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round">' +
        CS.ICONES[icone] +
      '</svg>' +
      '<span class="cs-curseur__texte"></span>' +
    '</span>';
  c.querySelector('.cs-curseur__texte').textContent = texte;
  ctx.conteneur.appendChild(c);
  ctx.ecoute(zone, 'pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    c.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    c.classList.toggle('is-visible', !!estDessus(e));
  });
  ctx.ecoute(zone, 'pointerleave', function () { c.classList.remove('is-visible'); });
  return c;
};
