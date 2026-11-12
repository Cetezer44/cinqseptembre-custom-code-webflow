/* ===== Survol des liens texte : lettres en roulement =====
   Au survol, chaque lettre descend et sort par le bas de sa ligne pendant que
   sa jumelle entre par le haut, avec un decalage d'une lettre a la suivante.

   CS.lettres(element) decoupe le texte d'un element en lettres :

     <a class="cs-lettres" aria-label="Contact">
       <span class="cs-lettres__ligne" aria-hidden="true">
         <span class="cs-mot"><span class="cs-l" data-l="C" style="--cs-n:0"><span class="cs-l__a">C</span></span>...</span>
       </span>
     </a>

   - .cs-l est le masque d'une lettre (overflow hidden) ;
   - .cs-l__a est la lettre reelle, qui sort par le bas ;
   - la jumelle est le ::after de .cs-l (content: attr(data-l)) : elle n'existe
     pas dans le document, donc le texte selectionne ou copie reste propre ;
   - les lettres sont groupees par mot, pour qu'un retour a la ligne ne coupe
     jamais un mot en deux.
   Le nom accessible du lien est conserve par aria-label.

   Reglages : CS.config.lettres (01-core.js). Le mouvement est en CSS
   (02-lettres.css) ; rien n'est decoupe sans souris ou en mouvement reduit. */
(function () {
  var K = CS.config.lettres;

  CS.lettres = function (el) {
    if (!K || !K.actif || !CS.sourisFine() || CS.reduit()) return;
    /* uniquement du texte simple : on ne touche pas a un lien qui contient autre chose */
    if (el.children.length && !el.querySelector(':scope > .cs-lettres__ligne')) return;
    var texte = (el.getAttribute('data-cs-texte') && el.querySelector('.cs-lettres__ligne'))
      ? el.getAttribute('data-cs-texte') : el.textContent;
    texte = texte.replace(/\s+/g, ' ').trim();
    if (!texte) return;

    var ligne = document.createElement('span');
    ligne.className = 'cs-lettres__ligne';
    ligne.setAttribute('aria-hidden', 'true');
    var n = 0;
    texte.split(' ').forEach(function (mot, i) {
      if (i) ligne.appendChild(document.createTextNode(' '));
      var m = document.createElement('span');
      m.className = 'cs-mot';
      Array.from(mot).forEach(function (c) {
        var l = document.createElement('span');
        l.className = 'cs-l';
        l.setAttribute('data-l', c);
        l.style.setProperty('--cs-n', n++);
        var a = document.createElement('span');
        a.className = 'cs-l__a';
        a.textContent = c;
        l.appendChild(a);
        m.appendChild(l);
      });
      ligne.appendChild(m);
    });

    el.textContent = '';
    el.appendChild(ligne);
    el.classList.add('cs-lettres');
    el.setAttribute('data-cs-texte', texte);
    if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', texte);
    else if (el.getAttribute('data-cs-aria') !== 'non') el.setAttribute('aria-label', texte);
    el.style.setProperty('--cs-lettres-duree', K.duree + 'ms');
    el.style.setProperty('--cs-lettres-decalage', K.decalage + 'ms');
  };

  /* A chaque page : les liens de la page, et ceux de la navigation la premiere fois */
  CS.module('lettres', null, function () {
    if (!K || !K.actif) return;
    Array.prototype.forEach.call(document.querySelectorAll(K.selecteur), function (el) {
      if (!el.classList.contains('cs-lettres')) CS.lettres(el);
    });
  });
})();
