/* ===== Demarrage et transitions de page (Barba) =====
   Barba remplace le contenu de la page sans recharger : la barre de
   navigation (hors du conteneur) reste en place, et le code n'est telecharge
   qu'une fois. A chaque changement de page :

     1. la page qui part s'efface (fondu)            -> CS.sortir()
     2. Barba echange les conteneurs
     3. la nouvelle page s'installe                  -> CS.entrer(conteneur)
     4. elle apparait (fondu)

   Dans Webflow, chaque page a un element [data-barba="container"] avec un
   data-barba-namespace. Sans cet element — ou si Barba est desactive dans
   CS.config.transitions — le site fonctionne en chargement classique.

   Bibliotheque : @barba/core 2.10.3 (MIT), embarquee dans ce fichier. */
(function () {
  var T = CS.config.transitions;

  /* Navigation programmee : par Barba s'il tourne, sinon classique */
  CS.aller = function (url) {
    if (CS.barbaActif && window.barba) window.barba.go(url);
    else location.href = url;
  };

  function fondre(el, de, vers, duree) {
    if (!el.animate) { el.style.opacity = vers; return Promise.resolve(); }
    var d = CS.reduit() ? Math.min(duree, 150) : duree;
    var a = el.animate([{ opacity: de }, { opacity: vers }],
      { duration: d, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' });
    /* Garde-fou : dans un onglet en arriere-plan les animations sont en pause
       et « finished » n'arriverait jamais — la navigation ne doit pas en dependre. */
    return Promise.race([a.finished.catch(function () {}), CS.attendre(d + 150)])
      .then(function () { el.style.opacity = vers; a.cancel(); });
  }

  /* Ce que Webflow fait a chaque chargement et qu'il faut refaire a la main */
  function majDocument(data) {
    /* identifiant de page, lu par les interactions Webflow */
    var m = data.next.html && data.next.html.match(/<html[^>]*\sdata-wf-page="([^"]+)"/);
    if (m) document.documentElement.setAttribute('data-wf-page', m[1]);
    /* lien courant dans la navigation */
    var ici = location.pathname.replace(/\/+$/, '') || '/';
    Array.prototype.forEach.call(document.querySelectorAll('.fixed-nav a[href]'), function (a) {
      var h = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
      var courant = h === ici;
      a.classList.toggle('w--current', courant);
      if (courant) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }

  function relancerWebflow() {
    try {
      if (!window.Webflow) return;
      window.Webflow.destroy();
      window.Webflow.ready();
      var ix2 = window.Webflow.require && window.Webflow.require('ix2');
      if (ix2 && ix2.init) ix2.init();
    } catch (e) {}
  }

  function demarrer() {
    var conteneur = document.querySelector('[data-barba="container"]');
    CS.entrer(conteneur || document.body);

    if (!T.actif || !window.barba || !conteneur) return;
    if (T.exclure.some(function (r) { return r.test(location.pathname); })) return;

    document.body.setAttribute('data-barba', 'wrapper');
    try {
      window.barba.init({
        timeout: 8000,
        prevent: function (o) {
          var a = document.createElement('a'); a.href = o.href;
          return T.exclure.some(function (r) { return r.test(a.pathname); });
        },
        transitions: [{
          name: 'fondu',
          leave: function (data) { return fondre(data.current.container, 1, 0, T.sortie); },
          afterLeave: function () { CS.sortir(); },
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            data.next.container.style.opacity = 0;
            majDocument(data);
            CS.entrer(data.next.container);
          },
          enter: function (data) { return fondre(data.next.container, 0, 1, T.entree); },
          after: function (data) {
            data.next.container.style.opacity = '';
            relancerWebflow();
          }
        }]
      });
      CS.barbaActif = true;
    } catch (e) {
      if (window.console) console.error('[CS] barba', e);
    }
  }

  CS.pret(demarrer);
})();
