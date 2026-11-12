#!/usr/bin/env python3
"""Trace les mots de la roulette du loader (UN, DEUX, TROIS, QUATRE) en SVG.

Le logotype est compose en Instrument Serif (italique pour CINQ) avec un
interlettrage de 45/1000 : verifie en superposant les contours de la police au
trace du logo (largeurs de lettres identiques au millieme). Ce script reprend
donc la meme police, la meme echelle et la meme ligne de base, pour que les
mots de la roulette soient indiscernables du CINQ final.

Les mots sont livres en contours : rien a charger quand le loader s'affiche.

    npm pack @fontsource/instrument-serif && tar xzf fontsource-instrument-serif-*.tgz
    python3 tools/tracer-mots.py package/files/instrument-serif-latin-400-italic.woff

Instrument Serif est sous licence SIL Open Font License 1.1.
Necessite fontTools (pip install fonttools).
"""
import os, sys
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

MOTS = ['UN', 'DEUX', 'TROIS', 'QUATRE']
ECHELLE = 0.02317      # unites de police -> unites du viewBox de cinq.svg (hauteur 22)
BASE = 17.02           # ligne de base dans ce viewBox
INTERLETTRAGE = 45     # unites de police, comme dans le logo
BORD_DROIT = 43.31     # bord droit de l'encre du Q de CINQ : les mots s'y alignent
LARGEUR_CINQ = 43.5    # largeur du viewBox de cinq.svg
HAUTEUR = 22

def crenage(f):
    """Paires de crenage (GPOS, PairPos) : suffisant pour des capitales."""
    k = {}
    if 'GPOS' not in f:
        return k
    noms = f.getGlyphOrder()
    for lk in f['GPOS'].table.LookupList.Lookup:
        for st in lk.SubTable:
            st = getattr(st, 'ExtSubTable', st)
            if getattr(st, 'LookupType', None) != 2:
                continue
            cov = st.Coverage.glyphs
            if st.Format == 1:
                for g1, ps in zip(cov, st.PairSet):
                    for r in ps.PairValueRecord:
                        if r.Value1 and r.Value1.XAdvance:
                            k.setdefault((g1, r.SecondGlyph), r.Value1.XAdvance)
            elif st.Format == 2:
                c1, c2 = st.ClassDef1.classDefs, st.ClassDef2.classDefs
                for g1 in cov:
                    for g2 in noms:
                        v = st.Class1Record[c1.get(g1, 0)].Class2Record[c2.get(g2, 0)].Value1
                        if v and v.XAdvance:
                            k.setdefault((g1, g2), v.XAdvance)
    return k

def tracer(f, k, texte):
    gs, cmap, hmtx = f.getGlyphSet(), f.getBestCmap(), f['hmtx']
    noms = [cmap[ord(c)] for c in texte]
    pen, bp, x = SVGPathPen(gs, ntos=lambda v: ('%.1f' % v).rstrip('0').rstrip('.')), BoundsPen(gs), 0
    for i, n in enumerate(noms):
        if i:
            x += k.get((noms[i - 1], n), 0) + INTERLETTRAGE
        t = (1, 0, 0, -1, x, 0)
        gs[n].draw(TransformPen(pen, t)); gs[n].draw(TransformPen(bp, t))
        x += hmtx[n][0]
    return pen.getCommands(), bp.bounds

def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    f = TTFont(sys.argv[1]); k = crenage(f)
    sortie = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'svg')
    for mot in MOTS:
        d, b = tracer(f, k, mot)
        tx = BORD_DROIT - b[2] * ECHELLE                    # l'encre finit ou finit le Q
        gauche = tx + b[0] * ECHELLE
        largeur = LARGEUR_CINQ - gauche
        svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="%.3f 0 %.3f %d" role="img" aria-label="%s" fill="currentColor">\n'
               '<path transform="translate(%.3f %.2f) scale(%.5f)" d="%s"/>\n</svg>\n'
               % (gauche, largeur, HAUTEUR, mot.capitalize(), tx, BASE, ECHELLE, d))
        open(os.path.join(sortie, mot.lower() + '.svg'), 'w').write(svg)
        print('%-7s largeur %.2f  (%.1f %% de CINQ)' % (mot, largeur, 100 * largeur / LARGEUR_CINQ))

if __name__ == '__main__':
    main()
