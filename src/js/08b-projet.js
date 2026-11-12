/* ===== Page projet =====
   La structure est dans le Designer : .cs-projet-hero (image, titre, credits),
   puis la description et le Rich Text des photos. Ce module ajoute :

   1. l'entree du haut de page — l'image se devoile en masque, sauf si elle
      vient d'arriver en volant depuis la mosaique (09-barba.js) ; le titre et
      les credits montent ensuite ;
   2. le devoilement des blocs de photos du Rich Text, au defilement ;
   3. un leger glissement des images dans leur cadre pendant le defilement.

   Il remplace le script qui vivait dans le code personnalise de la page :
   avec Barba, un script de page n'est pas execute quand on arrive par une
   transition. Reglages : CS.config.projet (01-core.js). */
CS.module('projet', CS.config.projet.pages, function (ctx) {
  var P = CS.config.projet, page = ctx.conteneur, reduit = CS.reduit();

  /* ---- 1. Haut de page ---- */
  var hero = page.querySelector(P.hero);
  if (hero && !reduit) {
    hero.setAttribute('data-entree', CS.arriveeParImage ? 'vol' : 'masque');
    void hero.offsetWidth;
    hero.classList.add('est-entre');
  }

  if (reduit) return;
  page.classList.add('cs-projet-anime');

  /* ---- 2. Blocs de photos : devoiles quand ils entrent a l'ecran ---- */
  var blocs = Array.prototype.slice.call(page.querySelectorAll(P.blocs));
  if (blocs.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        /* decalage entre les images d'un meme bloc, dans l'ordre de lecture */
        var enfants = Array.prototype.slice.call(e.target.children);
        enfants.sort(function (a, b) {
          var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
          return (ra.top - rb.top) || (ra.left - rb.left);
        });
        enfants.forEach(function (k, i) { k.style.setProperty('--cs-d', (i * P.decalage) + 'ms'); });
        e.target.classList.add('est-devoile');
        obs.unobserve(e.target);
      });
    }, { threshold: P.seuil });
    blocs.forEach(function (b) { obs.observe(b); });
    ctx.aLaSortie(function () { obs.disconnect(); });
  } else {
    blocs.forEach(function (b) { b.classList.add('est-devoile'); });
  }

  /* ---- 3. Glissement des images dans leur cadre ----
     Le cadre ne bouge pas ; l'image, legerement agrandie, se deplace dedans
     selon la position du cadre a l'ecran. */
  var cadres = Array.prototype.slice.call(page.querySelectorAll(P.cadre))
    .filter(function (el) { var c = el.firstElementChild; return c && c.tagName === 'IMG'; });
  if (cadres.length) {
    page.style.setProperty('--cs-zoom', (1 + 2 * P.amplitude + 0.012).toFixed(3));
    page.classList.add('cs-projet-parallaxe');
    var enAttente = false;
    var image = function () {
      enAttente = false;
      var h = window.innerHeight;
      for (var i = 0; i < cadres.length; i++) {
        var r = cadres[i].getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        /* +1 quand le cadre arrive par le bas, -1 quand il sort par le haut */
        var p = ((r.top + r.height / 2) - h / 2) / ((h + r.height) / 2);
        p = Math.max(-1, Math.min(1, p));
        cadres[i].firstElementChild.style.transform =
          'translate3d(0,' + (-p * P.amplitude * r.height).toFixed(1) + 'px,0) scale(var(--cs-zoom))';
      }
    };
    var demander = function () { if (!enAttente) { enAttente = true; requestAnimationFrame(image); } };
    ctx.ecoute(window, 'scroll', demander, { passive: true });
    ctx.ecoute(window, 'resize', demander, { passive: true });
    image();
    var t = setTimeout(image, 400);       // la mise en page bouge encore pendant le chargement des images
    ctx.aLaSortie(function () { clearTimeout(t); });
  }
});
