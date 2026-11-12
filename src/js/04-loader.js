/* ===== Loader =====
   Les deux mots du logotype arrivent ecartes, se rapprochent jusqu'a former le
   logo de l'accueil — meme taille, meme position — puis le voile s'efface.
   Le logo donne ainsi l'impression de rester en place pendant la transition.

   Le balisage est injecte ici : rien a creer dans le Designer, et le loader
   fonctionne donc sur n'importe quelle page sans intervention.
   Reglages : CS.config.loader (01-core.js). */
(function () {
  var C = CS.config.loader;

  /* Le Head a pu masquer la page en prevision du loader : quoi qu'il arrive
     ensuite, c'est a nous de la redonner a voir. */
  function rendreLaPage() {
    document.documentElement.classList.remove('cs-loader-actif');
  }

  if (!C.actif) { rendreLaPage(); return; }
  if (!C.pages || C.pages.indexOf(CS.page) === -1) { rendreLaPage(); return; }

  var CLE = 'cs-loader-vu';
  if (C.uneFoisParSession) {
    try {
      if (sessionStorage.getItem(CLE)) { rendreLaPage(); return; }
      sessionStorage.setItem(CLE, '1');
    } catch (e) { /* navigation privee : le loader passera a chaque fois */ }
  }

  document.documentElement.classList.add('cs-loader-actif');

  var voile = document.createElement('div');
  voile.className = 'cs-loader';
  voile.setAttribute('role', 'presentation');
  voile.style.setProperty('--cs-loader-apparition', C.apparition + 'ms');
  voile.style.setProperty('--cs-loader-course', C.course + 'ms');
  voile.style.setProperty('--cs-loader-sortie', C.sortie + 'ms');
  voile.innerHTML =
    '<div class="cs-loader__logo">' +
      '<span class="cs-loader__mot cs-loader__mot--cinq">' + CS.svg.cinq + '</span>' +
      '<span class="cs-loader__mot cs-loader__mot--septembre">' + CS.svg.septembre + '</span>' +
    '</div>';

  function poser() {
    (document.body || document.documentElement).appendChild(voile);
    jouer();
  }

  async function jouer() {
    var reduit = CS.reduit();

    /* Mouvement reduit : le logo est deja assemble, simple fondu */
    if (reduit) {
      voile.setAttribute('data-joint', '');
      await CS.attendre(20);
      voile.setAttribute('data-visible', '');
      await CS.attendre(C.apparition + C.repos);
    } else {
      await CS.attendre(20);              // laisse le navigateur peindre l'etat de depart
      voile.setAttribute('data-visible', '');   // les mots apparaissent, ecartes
      await CS.attendre(C.apparition + C.pause);
      voile.setAttribute('data-joint', '');     // ils se rejoignent
      await CS.attendre(C.course + C.repos);
    }

    voile.setAttribute('data-fini', '');        // le voile s'efface
    rendreLaPage();
    document.dispatchEvent(new CustomEvent('cs:loader-fini'));

    await CS.attendre(C.sortie);
    if (voile.parentNode) voile.parentNode.removeChild(voile);
  }

  CS.pret(poser);
})();
