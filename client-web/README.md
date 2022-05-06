# Sanity frontend web client


### Table of contents
- Getting Started
  - [Docker](#docker)
  - [NPM](#npm)

<a name="docker"></a>
## Docker usage 

Ensure you are located in the client-web/ folder with the Dockerfile present.

### Build docker image
```bash
docker build . -t sanity/web
```

### Run docker image
The project will run by default port tcp/3000, since this is the Node.js default
```bash
docker run -dp 3000:3000 --name sanity/web
```

### Stop docker container
```bash
docker stop sanity/web
```

<a name="npm"></a>
## NPM install 
Ensure you are located in the client-web/ folder with the package.json present

### Install dependencies
```
npm install
```
Once the dependencies are installed, you should be able to start the project with the following command
```
npm start
```
