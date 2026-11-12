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
