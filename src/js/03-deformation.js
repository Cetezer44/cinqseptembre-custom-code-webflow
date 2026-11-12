/* ===== Deformation des images au defilement (WebGL) =====
   Tout ce qui approche du haut ou du bas de l'ecran est etire horizontalement
   depuis l'axe central, selon un profil en arc de cercle : nul au milieu de
   l'ecran, maximal aux bords. La deformation est calculee dans l'espace de
   l'ECRAN, pas dans chaque image : les bords verticaux des images se courbent,
   elles semblent s'enrouler vers soi. Appliquee image par image (un simple
   scaleX), elle garderait quatre bords droits — c'est la raison du WebGL.

   Ce module ne sait que dessiner : on lui donne a chaque image la liste des
   rectangles a l'ecran et l'intensite, il rend la main. Le moteur de collage
   (05-collage.js) decide de l'intensite a partir de la vitesse de defilement.

   CS.creerDeformation(canvas, auChargement) -> { taille, dessiner, detruire }
   ou null si WebGL n'est pas disponible (le DOM reste alors affiche tel quel). */
CS.creerDeformation = function (canvas, auChargement) {
  var gl = null;
  try {
    gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: 'low-power' });
  } catch (e) {}
  if (!gl) return null;

  var VS =
    'attribute vec2 aP; varying vec2 vEcran;' +
    'void main(){ vEcran = aP; gl_Position = vec4(aP.x*2.0-1.0, 1.0-aP.y*2.0, 0.0, 1.0); }';

  var FS =
    'precision highp float;' +
    'uniform sampler2D uTexture; uniform vec2 uEcran; uniform vec4 uCase; uniform vec2 uImage;' +
    'uniform float uForce; uniform float uZoom; varying vec2 vEcran;' +
    'void main(){' +
    /* 1. courbure de l'ecran : on resserre l'abscisse lue, donc l'image affichee s'elargit */
    '  vec2 e = vEcran;' +
    '  float cy = e.y*2.0-1.0;' +
    '  float bord = 1.0 - sqrt(max(0.0, 1.0 - cy*cy));' +
    '  e.x = 0.5 + (e.x-0.5)*(1.0 - bord*uForce);' +
    /* 2. position dans la case, bords adoucis sur moins d'un pixel */
    '  vec2 l = (e*uEcran - uCase.xy)/uCase.zw;' +
    '  vec2 d = min(l, 1.0-l)*uCase.zw;' +
    '  float a = smoothstep(0.0, 0.75, min(d.x, d.y));' +
    '  if (a <= 0.0) discard;' +
    /* 3. meme cadrage que object-fit: cover, zoom de survol compris */
    '  vec2 uv = 0.5 + (l-0.5)/uZoom;' +
    '  float rc = uCase.z/max(uCase.w, 1.0);' +
    '  float ri = uImage.x/max(uImage.y, 1.0);' +
    '  if (ri > rc) uv.x = 0.5 + (uv.x-0.5)*rc/ri; else uv.y = 0.5 + (uv.y-0.5)*ri/rc;' +
    '  gl_FragColor = vec4(texture2D(uTexture, clamp(uv, 0.0, 1.0)).rgb, a);' +
    '}';

  function shader(type, source) {
    var s = gl.createShader(type);
    gl.shaderSource(s, source); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { gl.deleteShader(s); return null; }
    return s;
  }
  var vs = shader(gl.VERTEX_SHADER, VS), fs = shader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return null;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  var tampon = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  var aP = gl.getAttribLocation(prog, 'aP');
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

  var U = {};
  ['uTexture', 'uEcran', 'uCase', 'uImage', 'uForce', 'uZoom'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
  gl.uniform1i(U.uTexture, 0);
  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  /* ---- Textures, une par adresse d'image ---- */
  var textures = {}, vivant = true, enCours = 0, largeur = 1, hauteur = 1, densite = 1;
  function texture(url) {
    var t = textures[url];
    if (t) return t.pret ? t : null;
    t = textures[url] = { pret: false };
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    enCours++;
    img.onload = function () {
      enCours--;
      if (!vivant) return;
      try {
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        if (gl.getError() !== gl.NO_ERROR) throw new Error('texture');
        t.tex = tex; t.w = img.naturalWidth; t.h = img.naturalHeight; t.pret = true;
        if (auChargement) auChargement();
      } catch (e) { t.echec = true; }       // image non lisible : la case garde son <img>
    };
    img.onerror = function () { enCours--; t.echec = true; };
    img.src = url;
    return null;
  }

  return {
    enAttente: function () { return enCours > 0; },

    taille: function (l, h) {
      densite = Math.min(window.devicePixelRatio || 1, 2);
      largeur = l; hauteur = h;
      var w = Math.max(1, Math.round(l * densite)), hh = Math.max(1, Math.round(h * densite));
      if (canvas.width !== w || canvas.height !== hh) { canvas.width = w; canvas.height = hh; }
      gl.viewport(0, 0, w, hh);
      gl.uniform2f(U.uEcran, l, h);
    },

    /* cases : [{ cle, url, x, y, w, h, zoom }] en pixels CSS. Rend le tableau des
       cles effectivement dessinees (texture prete). */
    dessiner: function (cases, force) {
      var dessinees = [];
      if (!vivant) return dessinees;
      gl.disable(gl.SCISSOR_TEST);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.SCISSOR_TEST);
      gl.uniform1f(U.uForce, force);
      /* marge laterale : de combien une image peut deborder de sa case une fois etiree */
      var marge = largeur * 0.5 * force / (1 - force) + 2;
      for (var i = 0; i < cases.length; i++) {
        var c = cases[i], t = texture(c.url);
        if (!t) continue;
        var x0 = Math.max(0, Math.floor((c.x - marge) * densite));
        var x1 = Math.min(canvas.width, Math.ceil((c.x + c.w + marge) * densite));
        var y0 = Math.max(0, Math.floor((hauteur - c.y - c.h) * densite));
        var y1 = Math.min(canvas.height, Math.ceil((hauteur - c.y) * densite));
        if (x1 <= x0 || y1 <= y0) continue;
        gl.scissor(x0, y0, x1 - x0, y1 - y0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, t.tex);
        gl.uniform4f(U.uCase, c.x, c.y, c.w, c.h);
        gl.uniform2f(U.uImage, t.w, t.h);
        gl.uniform1f(U.uZoom, c.zoom || 1);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        dessinees.push(c.cle);
      }
      return dessinees;
    },

    detruire: function () {
      vivant = false;
      Object.keys(textures).forEach(function (k) { if (textures[k].tex) gl.deleteTexture(textures[k].tex); });
      gl.deleteBuffer(tampon); gl.deleteProgram(prog);
      var perte = gl.getExtension('WEBGL_lose_context');
      if (perte) perte.loseContext();
    }
  };
};
