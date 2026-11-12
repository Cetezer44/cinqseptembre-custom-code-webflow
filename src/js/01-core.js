/* ===== Cinq Septembre — socle =====
   Charge par jsDelivr depuis le depot cinqseptembre-custom-code-webflow.
   Tous les reglages du site sont rassembles ici : c'est le seul endroit a
   modifier pour ajuster une duree, un seuil ou un selecteur. */
window.CS = window.CS || {};

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
