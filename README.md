# Installation

### Télécharger le projet

    git clone https://github.com/Magizchi/eleven-labs.git
    
## Lancer Docker
Vous devez avoir Docker de lancer

## Dev Container
### Avec dev container (seulement avec VSCode)
Pour pouvoir lance le projet, il faut installer devContainer
Nom : Dev Containers
ID : ms-vscode-remote.remote-containers
Description : Open any folder or repository inside a Docker container and take advantage of Visual Studio Code's full feature set.
Version : 0.275.1
Serveur de publication : Microsoft
Lien de la Place de marché pour VS : https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers



### Sans dev container
sinon lancer la commande

    $ docker compose up -d


### Pour le BACK
#### Installer les dépendances 

    npm install

#### Faire la migration

    npm run migration:run

###### Lancer en dv

    npm run dev

### Partie Client
Accéder au dossier client

    cd /client

#### Installer les dépendances 

    npm install

#### Lancer en dv

    npm run dev