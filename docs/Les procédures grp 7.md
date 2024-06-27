**Procédures interne**
# Les procédures
[Procédure de changement de contenue de la base de données dans MySql BenchWork	2](#_toc170393238)

[Comment intégrer le site dans une container Docker.	2](#_toc170393239)

[Comment configurer SNMP/SNMPD sur un Debain	3](#_toc170393240)




















# <a name="_toc170393238"></a>Procédure de changement de contenue de la base de données dans MySql BenchWork


- Lance Entrez les détails de la connexion (hôte, port, nom d'utilisateur, mot de passe, etc.) et enregistrez la connexion puis faite connexion
- Une fois connecté, les bases de données disponibles apparaîtront dans le panneau de navigation sur la gauche.
- Sélectionner et double-cliquez sur la base de données contenant la table que vous souhaitez modifier pour la sélectionner. Le nom de la base de données sélectionnée sera mis en gras.
- Ensuite ajouter les données dans la table souhaitée et faite « Exécuter »
# <a name="_toc170393239"></a>Comment intégrer le site dans une container Docker. 
Créer un **Dockerfile**

Dans le répertoire racine de site, créez un fichier nommé Dockerfile.

Ajoutez les instructions nécessaires pour configurer l'environnement. Voici un exemple pour une application web simple utilisant Node.js : 

\# Utiliser une image de base officielle Node.js

**FROM node:14**

\# Définir le répertoire de travail dans le conteneur

**WORKDIR /usr/src/app**

\# Copier le fichier package.json et package-lock.json

**COPY package\*.json ./**

\# Installer les dépendances

**RUN npm install**

\# Copier le reste des fichiers de l'application

**COPY . .**

\# Exposer le port que l'application va utiliser

**EXPOSE 3000**

\# Démarrer l'application

**CMD ["npm", "start"]**



Créer un fichier **docker-compose.yml**

Dans le même répertoire de Dockerfile, créez un fichier nommé **docker-compose.yml**

Puis ajouter les information/des services dans le fichier **yml** et sauvegardé. 

Étape 3 : Construire et exécuter les conteneurs

Une fois le fichier **.yml** est enregistré exécutez la commande suivant **docker-compose up –build**  cette commande permet de onstruire les images et démarrer les conteneurs. 

Puis faite un test de d’accès au site avec l’ip ou URL de site concerné exemple [**http://localhost:3000**](http://localhost:3000)


# <a name="_toc170393240"></a>Comment configurer SNMP/SNMPD sur un Debain

Ouvrez un terminal sur votre système Debian.

Mettez à jour les listes de paquets avec la commande **sudo apt-get update** puis installez SNMP avec **sudo apt-get install snmp snmpd** uns fois c’est fait on passe à l’étape de configuration. 

Configuration :

Ouvrez le fichier de configuration SNMPD avec **sudo nano /etc/snmp/snmpd.conf** puis ajoutez les commades suivantes dans le fichier config **agentAddress udp:161,udp6:[::1]:161** et **rocommunity public default -V systemonly** et enregistrer. 

**Une fois enregistre il faut redémarrer** le service SNMPD avec sudo systemctl restart snmpd et pour le service démarre en auto faite **sudo systemctl enable snmpd.** 

Une fois toute est fait correctement on arrive en phase de test pour vérifier la conf, cela se fait avec **snmpwalk -v 2c -c public localhost**


**Groupe 7 : Ali, Hadrien, Olivia, Nicolas, Gaetan et Victor**
