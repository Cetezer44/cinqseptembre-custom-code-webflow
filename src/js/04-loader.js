/* ===== Loader =====
   Le logotype apparait avec, a la place de CINQ, une roulette : UN, DEUX,
   TROIS, QUATRE defilent vers le haut comme un compteur et s'arretent sur
   CINQ. Le logo est alors forme — meme taille, meme position que celui de
   l'accueil — et le voile s'efface : le logo semble rester en place.

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

  /* La roulette : une bande de mots empiles, vue a travers la case de CINQ.
     Chaque mot est cale a droite (contre SEPTEMBRE, qui ne bouge pas) et garde
     sa largeur propre, lue dans son viewBox : 43,5 = largeur de CINQ. */
  var mots = (C.mots || ['cinq']).filter(function (m) { return CS.svg[m]; });
  var LARGEUR_CINQ = 43.5;
  var bandeHTML = mots.map(function (m, k) {
    var vb = /viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+)/.exec(CS.svg[m]);
    var largeur = vb ? (parseFloat(vb[1]) / LARGEUR_CINQ * 100) : 100;
    return '<span class="cs-loader__chiffre" style="--cs-k:' + k + ';width:' + largeur.toFixed(2) + '%">' + CS.svg[m] + '</span>';
  }).join('');

  var voile = document.createElement('div');
  voile.className = 'cs-loader';
  voile.setAttribute('role', 'presentation');
  voile.style.setProperty('--cs-loader-apparition', C.apparition + 'ms');
  voile.style.setProperty('--cs-loader-sortie', C.sortie + 'ms');
  voile.innerHTML =
    '<div class="cs-loader__logo">' +
      '<span class="cs-loader__mot cs-loader__mot--cinq"><span class="cs-loader__bande">' + bandeHTML + '</span></span>' +
      '<span class="cs-loader__mot cs-loader__mot--septembre">' + CS.svg.septembre + '</span>' +
    '</div>';
  var bande = voile.querySelector('.cs-loader__bande');

  function poser() {
    (document.body || document.documentElement).appendChild(voile);
    jouer();
  }

  function cran(i, duree) {
    bande.style.setProperty('--cs-loader-pas', duree + 'ms');
    bande.style.setProperty('--cs-i', i);
  }

  async function jouer() {
    var dernier = mots.length - 1;

    if (CS.reduit()) {
      /* Mouvement reduit : pas de roulette, le logo est deja forme, simple fondu */
      cran(dernier, 0);
      await CS.attendre(20);
      voile.setAttribute('data-visible', '');
      await CS.attendre(C.apparition + C.repos);
    } else {
      await CS.attendre(20);                    // laisse le navigateur peindre l'etat de depart
      voile.setAttribute('data-visible', '');   // le logotype apparait, sur le premier mot
      await CS.attendre(C.apparition + C.pause);
      for (var i = 1; i <= dernier; i++) {
        var d = i === dernier ? C.pasDernier : C.pas;
        cran(i, d);
        await CS.attendre(d + (i === dernier ? 0 : C.pasPause));
      }
      await CS.attendre(C.repos);
    }

    voile.setAttribute('data-fini', '');        // le voile s'efface
    rendreLaPage();
    document.dispatchEvent(new CustomEvent('cs:loader-fini'));

    await CS.attendre(C.sortie);
    if (voile.parentNode) voile.parentNode.removeChild(voile);
  }

  CS.pret(poser);
})();
