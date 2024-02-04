# augustinpasquier.fr

Site web personnel - Portfolio.

## Contenu

Parcours personnel, langages et outils maitrisés, projets réalisés, contact.

## Stack technologique

- React + Next.js
- PrimeReact pour certains composants

## Lancer localement

Installer les dépendances :
```bash
npm i
```

Ajouter fichier .env avec un identifiant Google Analytics :
```dotenv
NEXT_PUBLIC_GA4_ID=<identifiant_Google_Analytics>
```

Lancer le serveur de dev (HMR + React StrictMode, mais plus lent) :
```bash
npm run dev
```

Build puis lancement :
```bash
npm run build
npm run start
```