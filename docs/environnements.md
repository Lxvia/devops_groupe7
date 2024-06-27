# Configuration des Environnements

Ce document décrit la configuration des variables d'environnement et des différents environnements pour l'application.

## Variables d'Environnement

Pour configurer l'application, vous devez définir certaines variables d'environnement. Voici les variables nécessaires :

```env
REACT_APP_API_URL=http://localhost:5000/api
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

## Description des Variables

REACT_APP_API_URL: URL de l'API utilisée par l'application React.
DB_HOST: Hôte où se trouve la base de données MySQL.
DB_USER: Nom d'utilisateur pour se connecter à la base de données MySQL.
DB_PASSWORD: Mot de passe de l'utilisateur MySQL.
DB_NAME: Nom de la base de données MySQL à utiliser.