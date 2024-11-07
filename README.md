**Questions de Réflexion**

- Quelle est l’utilité de Docker Compose comparé à l’utilisation directe de Docker pour une application unique ?

    Réponse : Docker Compose permet de générer et de démarrer simultanément tous les conteneurs d'une application, sans avoir à les lancer manuellement un par un.
  
- Quelles différences observes-tu entre un fichier Dockerfile et un fichier `docker-compose.yml` ?

    Réponse : Les fichiers Dockerfile et docker-compose.yml ont des rôles distincts dans le processus de conteneurisation et de déploiement d'une application.
    Le fichier docker-compose.yml sert à gerer le démarrage de plusieurs services et conteneurs,
    tandis que le fichier Dockerfile est utilisé pour définir la configuration d'un conteneur individuel.
  
- Comment Docker Compose facilite-t-il la gestion de plusieurs services ? Quels sont les avantages pour le déploiement en équipe ou en production ?

    Réponse : Docker Compose facilite la gestion de plusieurs services en automatisant le démarrage des conteneurs, le tout à partir d'un seul fichier de configuration.
