# Les Interrupteurs ⚡

Site web officiel de la troupe d'impro **Les Interrupteurs**.

## Stack technique

- **React 18** + **Vite 5**
- **React Router v6** — navigation multi-pages
- **Google Fonts** — Syne (display) + DM Sans (body)

## Lancer le projet en local

### Pré-requis
- [Node.js](https://nodejs.org/) version 18 ou supérieure

### Installation

```bash
# 1. Cloner ou dézipper le projet
cd les-interrupteurs

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur **http://localhost:5173**

### Build pour la production

```bash
npm run build
```

Les fichiers sont générés dans le dossier `/dist`.

## Structure du projet

```
src/
├── pages/
│   ├── Home.jsx         → Page d'accueil
│   ├── Spectacles.jsx   → Prochains spectacles
│   ├── Archives.jsx     → Anciens spectacles
│   ├── Equipe.jsx       → L'équipe
│   ├── Medias.jsx       → Photos & vidéos
│   └── Contact.jsx      → Formulaire de contact
├── components/
│   └── Navbar.jsx       → Barre de navigation (FR/EN toggle)
├── styles/
│   └── global.css       → Variables CSS & styles globaux
├── App.jsx              → Routing + contexte de langue
└── main.jsx             → Point d'entrée
```

## Personnalisation

- **Contenu** : modifier les données dans chaque fichier de page (spectacles, membres, etc.)
- **Couleurs** : modifier les variables CSS dans `src/styles/global.css`
- **Instagram** : remplacer `https://instagram.com` par votre vrai lien dans `Contact.jsx`
- **Vidéos** : remplacer les placeholders dans `Medias.jsx` par de vrais embeds YouTube

## Déploiement sur GitHub Pages

```bash
# 1. Créer un repo GitHub
# 2. Push le code
git init
git add .
git commit -m "init: Les Interrupteurs website"
git remote add origin https://github.com/VOTRE_USERNAME/les-interrupteurs.git
git push -u origin main

# 3. Installer gh-pages
npm install --save-dev gh-pages

# 4. Ajouter dans package.json :
# "homepage": "https://VOTRE_USERNAME.github.io/les-interrupteurs"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d dist"

# 5. Déployer
npm run deploy
```
