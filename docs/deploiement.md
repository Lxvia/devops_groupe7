# Documentation de Déploiement de l'Application React avec Base de Données MySQL

## Prérequis

1. Node.js et npm doivent être installés.
2. Un compte GitHub avec accès au dépôt de l'application.
3. Git doit être installé et configuré.
4. Docker doit être installé.
5. Un serveur MySQL disponible.

## Installation des Dépendances

Cloner le dépôt de l'application et installez les dépendances nécessaires :

```bash
git clone <URL_DU_DÉPÔT>
cd <NOM_DU_RÉPERTOIRE>
npm install
```

## Configuration des Variables d'Environnement

Créer un fichier .env à la racine du projet et configurer les variables d'environnement nécessaires. 

Exemple :

```bash
REACT_APP_API_URL=http://localhost:5000/api
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

## Lancer l'Application en Local
Pour démarrer l'application en mode développement, exécuter :
npm start

L'application sera accessible à http://localhost:3000.

## Construction pour la Production
Pour créer une version de production de l'application, exécuter :
npm run build

Cela générera un dossier build contenant les fichiers de production.

## Déploiement avec Docker

Construction de l'Image Docker
Créer une image Docker pour l'application

Exécuter le conteneur Docker en définissant les variables d'environnement nécessaires :

```bash
Copier le code
docker run -p 3000:3000 \
  -e REACT_APP_API_URL=http://localhost:5000/api \
  -e DB_HOST=localhost \
  -e DB_USER=your_db_user \
  -e DB_PASSWORD=your_db_password \
  -e DB_NAME=your_db_name \
  nom-de-votre-image
```

L'application sera accessible à http://localhost:3000.

## Intégration Continue et Déploiement Continu (CI/CD)
Utiliser GitHub Actions pour configurer CI/CD. Voici un exemple de workflow .github/workflows/ci-cd.yml :

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Build project
      run: npm run build

    - name: Docker build and push
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: user/nom-de-votre-image:latest
```