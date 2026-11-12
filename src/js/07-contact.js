/* ===== Page Contact =====
   La structure et les textes sont dans le Designer (.cs-contact). Ici :
   le curseur « Fermer » et la fermeture — un clic sur le fond noir, ou la
   touche Echap, ramene a la page d'ou l'on vient.

   La barre de navigation qui descend et le contenu qui apparait sont en CSS :
   voir 07-contact.css. */
CS.module('contact', CS.config.contact.pages, function (ctx) {
  var K = CS.config.contact;
  var fond = ctx.conteneur.matches('.cs-contact') ? ctx.conteneur : ctx.conteneur.querySelector('.cs-contact');
  if (!fond) return;

  function fermer() {
    var vientDuSite = CS.navigationInterne;      // on est arrive ici par une transition
    if (!vientDuSite) {
      try { vientDuSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
    }
    if (vientDuSite && history.length > 1) history.back();
    else CS.aller(K.retour);
  }

  /* Tout ce qui n'est pas un lien ferme la page */
  ctx.ecoute(fond, 'click', function (e) {
    if (e.target.closest('a, button')) return;
    fermer();
  });
  ctx.ecoute(window, 'keydown', function (e) { if (e.key === 'Escape') fermer(); });

  if (CS.curseur(ctx, fond, K.libelleFermer, 'croix', function (e) { return !e.target.closest('a, button'); })) {
    document.documentElement.classList.add('cs-curseur-fermer');
    ctx.aLaSortie(function () { document.documentElement.classList.remove('cs-curseur-fermer'); });
  }
});
