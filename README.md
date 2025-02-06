# Chatbot Fun Kin ![sourir](image.png)

Ce chatbot est créé pour vous garder de bonne humeur. Il s'appelle Fun Kin (un jeu de mots "un proche amusant") et il est comme votre tonton qui adore raconter des blagues… au bon moment, ou pas trop.  
Essayez-le, qu'on rigole un peu !

Ce projet est réalisé avec **React.js** et **TypeScript**.

## 🛠️ Fonctionnalités

1. **Interface de Chat** :

   - Saisie de message par l'utilisateur.
   - Affichage du dialogue complet (messages de l'utilisateur et du bot).

2. **Réponses de l’Agent** :

   - Si un mot-clé est reconnu dans le message de l’utilisateur, le bot utilise une réponse prédéfinie.
   - Sinon, le bot choisit une réponse aléatoire dans une liste.

3. **Expérience Utilisateur** :

   - Interface réactive adaptée à différentes tailles d’écran.
   - Défilement automatique vers le dernier message.

4. **Gestion d’État** :
   - Utilisation de hooks React (useState, useEffect).

## 🚀 **Installation et Exécution**

Cloner le dépôt
Une URL HTTPS - https://github.com/BepaTest/fun-kin.git
Une URL SSH - git@github.com:BepaTest/fun-kin.git

Ener project directory, you can run:

```bash
cd /fun-kin
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 📌 **Les etapes suivantes**

### Étape 1

- Connecter le chatbot à ChatGPT.
- Améliorer l’expérience utilisateur :
  - Adapter la zone de saisie à la taille du texte entré, en augmentant la hauteur à chaque retour à la ligne.
  - Ajouter un indicateur "Chatbot en train d’écrire..." lors de la génération de la réponse et modifier la couleur du bouton d’envoi côté utilisateur.

### Étape 2

- Amélioration de l'UX : ajouter la possibilité de changer la couleur de l’application en fonction de l’humeur : orange, bleu ou vert.

### Étape 3

- Création d’un profil utilisateur.
- Ajouter la possibilité de sauvegarder les échanges.
- Ajouter un menu avec l’historique des messages, permettant de les revoir ou de les supprimer.

### Travail en équipe

- Ajouter Eslint et Stylelint pour la detection et correction des erreurs du code JavaScript (React, React hooks, TypeScript) et CSS
- Configurer git pré-commit qui lance les linteurs, si on détecte des erreurs non corrigées, le commit est bloqué
- Creer un fichier css avec la defenition des culeurs et des tailles
- Nommer les classes selon l'approche BEM ([Block Element Modifier](https://getbem.com/naming/))
- Utiliser [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) pour les messages de commit
