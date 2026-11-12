/* ===== Page Contact =====
   La structure et les textes sont dans le Designer (.cs-contact). Ici :
   le curseur « Fermer » et la fermeture — un clic sur le fond noir, ou la
   touche Echap, ramene a la page d'ou l'on vient.

   L'entree (la barre de navigation qui descend, le contenu qui apparait) est
   entierement en CSS : voir 07-contact.css. */
(function () {
  if (CS.page !== 'contact') return;
  var K = CS.config.contact;

  function fermer() {
    var vientDuSite = false;
    try { vientDuSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
    if (vientDuSite && history.length > 1) history.back();
    else location.href = K.retour;
  }

  function demarrer() {
    var fond = document.querySelector('.cs-contact');
    if (!fond) return;

    /* Tout ce qui n'est pas un lien ferme la page */
    fond.addEventListener('click', function (e) {
      if (e.target.closest('a, button')) return;
      fermer();
    });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermer(); });

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var c = document.createElement('div');
    c.className = 'cs-curseur';
    c.setAttribute('aria-hidden', 'true');
    c.innerHTML =
      '<span class="cs-curseur__int">' +
        '<svg class="cs-curseur__rond" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round">' +
          '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5"/>' +
        '</svg>' +
        '<span class="cs-curseur__texte"></span>' +
      '</span>';
    c.querySelector('.cs-curseur__texte').textContent = K.libelleFermer;
    document.body.appendChild(c);
    document.documentElement.classList.add('cs-curseur-fermer');

    fond.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      c.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
      c.classList.toggle('is-visible', !e.target.closest('a, button'));
    });
    fond.addEventListener('pointerleave', function () { c.classList.remove('is-visible'); });
  }

  CS.pret(demarrer);
})();
