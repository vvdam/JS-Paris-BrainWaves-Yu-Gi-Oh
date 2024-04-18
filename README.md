# Wild YuGiOh

Nous allons créer une application affichant une liste de cartes du jeu Yu Gi Oh.

Pour cela, nous aurons besoin besoin de cette API : [Documentation de l'API](https://ygoprodeck.com/api-guide/).

Installe le projet avec la commande `npm ci` (à préférer à `npm install`, car les versions des modules seront les mêmes que le package-lock.json).

Les modules `axios` et `react-router-dom` sont déjà installé. Tu n'as pas à installer de modules pour cet exercice !

## 1. API

Dans le composant `<CardList />`, récupérer la liste des cartes et faire un `console.log` du résultat.

Fait en sorte de n'appeler l'API qu'au montage du composant.

## 2. Liste

Dans ton composant `<CardList />`, map sur les données récupérés de l'API et affiche le nom de chaque carte dans une balise `<p>` pour commencer

## 3. Détail

Dans ton composant `<CardList />`, modifie l'affichage de tes héros afin d'appeler le composant `<Card />` et en lui passant les informations d'une carte par les props.

Modifie le composant `<Card />` afin d'afficher quelques informations d'une carte :

- son nom
- son image
- sa race

## 4. Routing

Ajoute dans le fichier `main.jsx` la configuration nécessaire à la création des routes suivantes :

- "/random" qui affichera le composant `<RandomCard />`
- "/card/:id" qui affichera le composant `<CardDetails />`

`<RandomCard />` doit appeler l'API pour récuperer une carte au hasard et afficher le nom et les statistiques de celle-ci.

En fonction de l'identifiant, le composant `<CardDetails />` doit appeler l'API afin d'afficher le nom et les statistiques de la carte.

Ajout dans `<CardDetails />` un bouton "Back to the list" qui  redirige sur la page qui affiche la liste des cartes.

## 5. Filtrage

Dans `<CardList />`, déclare un state pour stocker la valeur selectionner depuis le composant `<RaceFilter />` en lui passant en props le setter de ton state.

Ajouter un filtre sur la liste des cartes affiché afin de ne garder que les cartes de la race correspondante.

## 6. Recherche

Dans `<CardList />`, ajoute un label "Rechercher" et un champs texte, avant la liste.

À la modification du texte du champs, filtrer les cartes pour n'afficher que celles dont le nom correspond à la recherche.