/* ===== Loader =====
   Comme sur la maquette : CINQ et SEPTEMBRE apparaissent ecartes, devoiles par
   un masque qui remonte, puis se rapprochent jusqu'a former le logotype — meme
   taille, meme position que celui de l'accueil. Le voile s'efface : le logo
   semble rester en place, et le collage joue son entree (cs:loader-fini).

   Le balisage est injecte ici : rien a creer dans le Designer.
   Joue a chaque chargement reel de la page ; pas quand on y revient par une
   transition Barba (le script n'est alors pas relance).
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
  voile.style.setProperty('--cs-loader-decalage', C.decalage + 'ms');
  voile.style.setProperty('--cs-loader-course', C.course + 'ms');
  voile.style.setProperty('--cs-loader-sortie', C.sortie + 'ms');
  voile.innerHTML =
    '<div class="cs-loader__logo">' +
      '<span class="cs-loader__mot cs-loader__mot--cinq"><span class="cs-loader__masque">' + CS.svg.cinq + '</span></span>' +
      '<span class="cs-loader__mot cs-loader__mot--septembre"><span class="cs-loader__masque">' + CS.svg.septembre + '</span></span>' +
    '</div>';

  function poser() {
    (document.body || document.documentElement).appendChild(voile);
    jouer();
  }

  async function jouer() {
    if (CS.reduit()) {
      /* Mouvement reduit : le logo est deja forme, simple fondu */
      voile.setAttribute('data-joint', '');
      await CS.attendre(20);
      voile.setAttribute('data-visible', '');
      await CS.attendre(300 + C.repos);
    } else {
      await CS.attendre(20);                    // laisse le navigateur peindre l'etat de depart
      voile.setAttribute('data-visible', '');   // les deux mots se devoilent, ecartes
      await CS.attendre(C.apparition + C.decalage + C.pause);
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
