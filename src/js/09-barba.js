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

  /* Rideau : le panneau se devoile ou se referme par le haut. clip-path ne
     touche ni a la mise en page ni au contenu, qui reste immobile dessous. */
  var FERME = 'inset(0 0 100% 0)', OUVERT = 'inset(0 0 0% 0)';
  function rideau(el, de, vers) {
    if (CS.reduit() || !el.animate) return fondre(el, de === FERME ? 0 : 1, vers === FERME ? 0 : 1, 150);
    var a = el.animate([{ clipPath: de }, { clipPath: vers }],
      { duration: T.rideau, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fill: 'forwards' });
    return Promise.race([a.finished.catch(function () {}), CS.attendre(T.rideau + 150)])
      .then(function () { el.style.clipPath = vers === OUVERT ? '' : vers; a.cancel(); });
  }

  /* ---- Image qui s'envole vers la page projet ----
     Une copie de l'image cliquee, posee en position fixe par-dessus les deux
     pages, va de sa place d'origine a celle de l'image de la page projet.
     Les deux cadres n'ont pas les memes proportions : on anime donc la boite
     elle-meme (position et taille) et l'image dedans reste en object-fit:
     cover — un transform la deformerait. Un seul element, hors du flux :
     le cout de mise en page est negligeable. */
  var vol = null;
  function decoller() {
    var o = CS.origineProjet; CS.origineProjet = null;
    if (!o || !o.src || CS.reduit() || Date.now() - o.quand > 4000) return null;
    var v = document.createElement('div');
    v.className = 'cs-vol';
    v.style.cssText = 'left:' + o.x + 'px;top:' + o.y + 'px;width:' + o.w + 'px;height:' + o.h + 'px';
    v.innerHTML = '<img alt="">';
    v.firstChild.src = o.src;
    document.body.appendChild(v);
    return v;
  }
  function atterrir(v, cadre) {
    var r = cadre.getBoundingClientRect();
    var de = { left: v.style.left, top: v.style.top, width: v.style.width, height: v.style.height };
    var a = { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' };
    var anim = v.animate([de, a], { duration: T.vol, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fill: 'forwards' });
    return Promise.race([anim.finished.catch(function () {}), CS.attendre(T.vol + 150)]).then(function () {
      /* l'image de la page prend le relais une fois chargee (au plus 1 s d'attente) */
      var img = cadre.querySelector('img');
      var prete = img && !img.complete && img.decode ? Promise.race([img.decode().catch(function () {}), CS.attendre(1000)]) : Promise.resolve();
      return prete.then(function () {
        cadre.classList.remove('cs-en-vol');
        requestAnimationFrame(function () { if (v.parentNode) v.parentNode.removeChild(v); });
      });
    });
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
          /* Vers une page projet : l'image cliquee s'envole jusqu'a sa place en
             haut de la page. sync = la page projet s'installe pendant le vol. */
          name: 'projet-ouvre',
          sync: true,
          to: { namespace: ['projet'] },
          beforeLeave: function (data) {
            if (data.next && data.next.container) data.next.container.style.opacity = 0;
            vol = decoller();
          },
          leave: function (data) { return fondre(data.current.container, 1, 0, T.sortie); },
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            CS.arriveeParImage = !!vol;
            data.next.container.style.opacity = 0;
            majDocument(data);
            CS.entrer(data.next.container);
          },
          enter: function (data) {
            var page = data.next.container;
            var cadre = vol && page.querySelector(CS.config.projet.image);
            if (!cadre) {
              if (vol && vol.parentNode) vol.parentNode.removeChild(vol);
              return fondre(page, 0, 1, T.entree);
            }
            cadre.classList.add('cs-en-vol');           // le cadre d'arrivee reste vide pendant le vol
            return Promise.all([atterrir(vol, cadre), fondre(page, 0, 1, T.entree)]);
          },
          after: function (data) {
            CS.sortir();
            vol = null; CS.arriveeParImage = false;
            data.next.container.style.opacity = '';
            relancerWebflow();
          }
        }, {
          /* Vers Contact : la page en place ne bouge pas, le noir descend dessus.
             sync = les deux pages coexistent le temps du mouvement. */
          name: 'contact-ouvre',
          sync: true,
          to: { namespace: ['contact'] },
          /* Avant que le rideau parte : la page en place est contenue sous lui
             (voir .cs-sous-rideau), et le logo central de l'accueil s'efface. */
          beforeLeave: function (data) {
            /* En mode sync, Barba a deja insere Contact dans le document : on
               le referme tout de suite, sinon le panneau noir s'afficherait
               en entier pendant que le logo s'efface. */
            var suivante = data.next && data.next.container;
            if (suivante) { if (CS.reduit()) suivante.style.opacity = 0; else suivante.style.clipPath = FERME; }
            var page = data.current.container;
            page.classList.add('cs-sous-rideau');
            var logo = page.querySelector('.cs-collage-logo');
            if (logo) return fondre(logo, 1, 0, T.logo);
          },
          leave: function () {},
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            if (!CS.reduit()) data.next.container.style.clipPath = FERME;
            else data.next.container.style.opacity = 0;
            majDocument(data);
            CS.entrer(data.next.container);
          },
          enter: function (data) { return rideau(data.next.container, FERME, OUVERT); },
          after: function (data) {
            CS.sortir();                               // la page restee dessous
            data.next.container.style.opacity = '';
            relancerWebflow();
          }
        }, {
          /* Depuis Contact : la page suivante s'installe dessous, le rideau remonte. */
          name: 'contact-ferme',
          sync: true,
          from: { namespace: ['contact'] },
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            data.next.container.classList.add('cs-sous-rideau');
            majDocument(data);
            CS.entrer(data.next.container);
          },
          leave: function (data) { return rideau(data.current.container, OUVERT, FERME); },
          enter: function () {},
          after: function (data) {
            CS.sortir();                               // Contact
            data.next.container.classList.remove('cs-sous-rideau');
            relancerWebflow();
          }
        }, {
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
