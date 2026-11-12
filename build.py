#!/usr/bin/env python3
"""Assemble les sources en deux fichiers servis par jsDelivr.

    python3 build.py

Les fichiers de src/js et src/css sont concatenes dans l'ordre de leur numero.
Un commentaire /*@include:chemin*/ dans un fichier JS est remplace par le
contenu du fichier, echappe en chaine JavaScript (utilise pour inliner les SVG).
La sortie reste lisible : jsDelivr la sert compressee, et on peut ainsi
retrouver le code en clair depuis le navigateur.
"""
import io, json, os, re, datetime

RACINE = os.path.dirname(os.path.abspath(__file__))
INCLUDE = re.compile(r"/\*@include:([^*]+)\*/''")

def lire(p):
    return io.open(p, encoding='utf-8').read()

def inclure(js):
    def rempl(m):
        chemin = os.path.join(RACINE, 'src', m.group(1).strip())
        contenu = lire(chemin).strip()
        return json.dumps(contenu, ensure_ascii=False)
    return INCLUDE.sub(rempl, js)

def assembler(dossier, suffixe, transformer=None):
    d = os.path.join(RACINE, 'src', dossier)
    fichiers = sorted(f for f in os.listdir(d) if f.endswith(suffixe))
    morceaux = []
    for f in fichiers:
        texte = lire(os.path.join(d, f))
        if transformer:
            texte = transformer(texte)
        morceaux.append('/* ---------- %s ---------- */\n%s' % (f, texte.strip()))
    return fichiers, '\n\n'.join(morceaux) + '\n'

def main():
    date = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d')
    entete = ('/*! Cinq Septembre — code personnalise du site\n'
              ' *  Depot : github.com/Cetezer44/cinqseptembre-custom-code-webflow\n'
              ' *  Genere par build.py le %s — ne pas editer ce fichier a la main.\n'
              ' */\n') % date

    os.makedirs(os.path.join(RACINE, 'dist'), exist_ok=True)

    fjs, js = assembler('js', '.js', inclure)
    # Bibliotheques tierces (src/vendor), placees avant notre code, telles quelles
    if os.path.isdir(os.path.join(RACINE, 'src', 'vendor')):
        fv, vendor = assembler('vendor', '.js')
        fjs, js = fv + fjs, vendor + '\n' + js
    fcss, css = assembler('css', '.css')

    io.open(os.path.join(RACINE, 'dist', 'cinq-septembre.js'), 'w', encoding='utf-8').write(entete + js)
    io.open(os.path.join(RACINE, 'dist', 'cinq-septembre.css'), 'w', encoding='utf-8').write(entete + css)

    print('JS  :', ' + '.join(fjs))
    print('CSS :', ' + '.join(fcss))
    for n in ('cinq-septembre.js', 'cinq-septembre.css'):
        t = os.path.getsize(os.path.join(RACINE, 'dist', n))
        print('  dist/%-22s %6d octets' % (n, t))

if __name__ == '__main__':
    main()
