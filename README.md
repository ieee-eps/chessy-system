# CHESSY : Le Robot Joueur et Enseignant d'Échecs

**CHESSY** est un robot innovant conçu pour jouer aux échecs et enseigner ce jeu fascinant aux débutants comme aux experts. En combinant intelligence artificielle, vision par ordinateur, et une interface utilisateur intuitive, CHESSY vous offre une expérience ludique et pédagogique.

---

## Fonctionnalités principales

1. **Jouer aux échecs** : CHESSY utilise un moteur d'échecs avancé pour proposer des parties captivantes et adaptées à votre niveau.
2. **Enseignement** : Grâce à ChatGPT, CHESSY analyse les positions sur l'échiquier et donne des explications détaillées pour apprendre le jeu.
3. **Progression du joueur** : CHESSY enregistre vos parties et suit votre progression dans le temps.

---

## Arborescence du projet

Le projet est organisé en plusieurs dossiers, chacun correspondant à un composant spécifique :

### `chatgpt`
Ce dossier contient le code permettant de communiquer avec ChatGPT. Il permet d'analyser et de commenter des positions sur l'échiquier en utilisant le format FEN.

- **Exemple d'utilisation** : Envoyez un FEN à ChatGPT pour obtenir une analyse ou des conseils.

### `detection`
Ce dossier contient le code de vision par ordinateur. Il transforme les images capturées par la caméra de CHESSY en un format FEN (Forsyth–Edwards Notation) compréhensible par les autres modules.

- **Fonctionnalité clé** : Reconnaissance précise des pièces et de leur position sur l'échiquier.

### `gui-electron`
Ce dossier contient le code Electron pour connecter l'interface utilisateur au reste du robot.

- **Caractéristiques** :
    - Gestion des communications entre les différents modules.
    - Lancement et affichage de l'interface utilisateur.

### `interface`
Ce dossier regroupe l'interface principale du robot.

- **Fonctionnalités** :
    - Affichage interactif de l'échiquier.
    - Contrôle des parties en cours.
    - Accès aux paramètres et aux statistiques de progression.

### `stockfish`
CHESSY utilise Stockfish, l'un des moteurs d'échecs les plus avancés, pour :

- Prédire les meilleurs coups.
- Jouer des parties adaptées au niveau de l'utilisateur.
- Enregistrer les performances et proposer des exercices personnalisés.
---

## Installation

1. Clonez ce dépôt sur votre machine :
   ```bash
   git clone https://github.com/ieee-eps/chessy-system
