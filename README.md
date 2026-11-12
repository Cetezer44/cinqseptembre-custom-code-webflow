# Cinq Septembre — code personnalisé du site

Tout le code personnalisé du site Webflow **cinq-septembre.webflow.io** vit ici.
Webflow ne contient plus qu'une poignée de lignes qui vont chercher ce dépôt
via jsDelivr. Le champ « Custom code » du site, jusqu'ici plein à craquer
(limite de 50 000 caractères), redevient donc minuscule.

## Ce que Webflow contient

Dans *Site settings → Custom code → Head*, uniquement ceci :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Cetezer44/cinqseptembre-custom-code-webflow@v0.1.0/dist/cinq-septembre.css">
<script defer src="https://cdn.jsdelivr.net/gh/Cetezer44/cinqseptembre-custom-code-webflow@v0.1.0/dist/cinq-septembre.js"></script>
```

Le numéro de version apparaît deux fois : c'est la seule chose à changer pour
passer le site sur une nouvelle version.

## Organisation

```
src/js/     modules JavaScript, concaténés dans l'ordre de leur numéro
src/css/    feuilles de style, même principe
src/svg/    logotypes découpés, inlinés dans le JS à la construction
dist/       les deux fichiers servis par jsDelivr — générés, ne pas éditer
build.py    assemble src/ vers dist/
```

Les numéros en tête de fichier donnent l'ordre de chargement :
`01` socle et réglages, `02` navigation, `03` favicon, `04` loader, etc.

**Tous les réglages sont dans `src/js/01-core.js`**, dans `CS.config`. Durées,
seuils, sélecteurs : rien à chercher ailleurs.

## Construire

```bash
python3 build.py
```

Aucune dépendance : ni npm, ni node_modules. Python 3 suffit.

## Publier une nouvelle version

```bash
python3 build.py
git add -A && git commit -m "ce qui change"
git tag v0.2.0
git push && git push --tags
```

Puis remplacer le numéro de version dans le Head de Webflow et republier.

### Pourquoi un tag et pas `@main`

jsDelivr garde `@main` et `@latest` en cache pendant plusieurs jours sans
possibilité fiable de les vider : une correction poussée le matin peut n'arriver
sur le site que le lendemain. **Un tag est immuable** : jsDelivr le sert
immédiatement et le garde en cache pour toujours, ce qui est exactement ce
qu'on veut. Changer de version revient donc à changer une chaîne de caractères.

Pour une vérification rapide avant de poser un tag, on peut viser un commit
précis, lui aussi immuable et disponible tout de suite :

```
https://cdn.jsdelivr.net/gh/Cetezer44/cinqseptembre-custom-code-webflow@<sha-du-commit>/dist/cinq-septembre.js
```

## Modules

| Fichier | Rôle |
|---|---|
| `01-core.js` | Réglages (`CS.config`), détection de page, utilitaires |
| `04-loader.js` | Loader : CINQ et SEPTEMBRE se rejoignent pour former le logo |
| `05-collage.js` | Collage en défilement infini (accueil + page Projets) |

## Ce que Webflow doit fournir au collage

Le moteur ne crée pas les données : il lit une liste CMS posée dans le Designer,
masquée, et construit le collage à partir d'elle.

```html
<div class="cs-source" style="display:none">
  <!-- Collection List liée à « Projets » -->
  <a class="cs-source__item" href="/projets/{{slug}}" data-nom="{{Name}}">
    <img src="{{Image mosaique 1}}">
  </a>
</div>
```

Le moteur reprend le lien, l'image et le nom. Tout le reste — positions,
répétitions, défilement — est calculé.


## Cycle de vie des pages (Barba)

Le site utilise [@barba/core](https://barba.js.org) 2.10.3 (MIT), embarque dans
`dist/cinq-septembre.js` depuis `src/vendor/`. Les pages se remplacent sans
rechargement ; la barre de navigation, hors du conteneur, reste en place.

Dans Webflow, chaque page doit avoir un element `data-barba="container"` avec
un `data-barba-namespace`. Une page sans conteneur se charge normalement.

Un module ne demarre donc plus « une fois » : il se declare avec
`CS.module(nom, pages, init)`. `init(ctx)` est appele a chaque arrivee sur une
des pages listees ; tout ce qui est branche par `ctx.ecoute(...)` ou declare
par `ctx.aLaSortie(...)` est defait au depart, et tout element ajoute dans
`ctx.conteneur` disparait avec la page.

Les pages de projet (`/projets/...`) sont exclues des transitions
(`CS.config.transitions.exclure`) tant qu'elles embarquent leur propre script.

## Modules

| Fichier | Pages | Role |
|---|---|---|
| `03-deformation` | accueil | Calque WebGL : images courbees en haut et en bas pendant le defilement |
| `04-loader` | accueil | Loader au premier chargement de la session |
| `05-collage` | accueil, projets | Collage vertical infini (11 emplacements) |
| `06-liste` | projets | Vue liste horizontale + bascule grille / liste |
| `07-contact` | contact | Curseur « Fermer », fermeture |
| `08-archive` | archive | Mosaique infinie (collection Bibliotheque) + focus |
| `09-barba` | toutes | Demarrage et transitions de page |
