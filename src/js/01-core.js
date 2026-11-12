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
  loader: {
    actif: true,
    pages: ['accueil'],   // pages ou le loader apparait ; [] = partout, null = nulle part
    uneFoisParSession: true,
    apparition: 400,      // ms — les deux mots apparaissent, ecartes
    pause: 300,           // ms — temps d'arret avant le rapprochement
    course: 900,          // ms — les mots se rejoignent
    repos: 250,           // ms — temps d'arret une fois le logo forme
    sortie: 500           // ms — disparition du voile
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
    source: '.canvas-content, .cs-source',
    item: '.canvas-item__link, .cs-source__item',
    logo: true,                    // logo fixe au centre (false sur la page Projets)

    motif: { w: 1206, h: 3249 },
    partLargeur: 0.8375,           // 1206 / 1440 : le motif occupe 83,75 % de la largeur
    largeurMax: 1600,              // px — au-dela, les images cesseraient de grandir

    vitesse: 1,                    // molette
    vitesseTactile: 1.6,           // glissement au doigt
    souplesse: 0.1,                // lissage du defilement : 0,05 tres doux, 0,2 sec
    seuilClic: 8,                  // px — au-dela, le geste est un glissement, pas un clic

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
  }
};

/* ---- Utilitaires ---- */
CS.reduit = function () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
CS.page = (function () {
  var p = location.pathname.replace(/\/+$/, '');
  if (p === '' || p === '/index') return 'accueil';
  if (p.indexOf('/projets/') === 0) return 'projet';
  if (p === '/projets') return 'projets';
  if (p === '/archive' || p === '/archives' || p === '/bibliotheque') return 'archives';
  if (p === '/contact') return 'contact';
  if (p === '/approche' || p === '/a-propos') return 'approche';
  return p.replace(/^\//, '') || 'autre';
})();

document.documentElement.setAttribute('data-cs-page', CS.page);
