# CAMTENZO-SERVER #

### Prerequisities ###
* Node JS
```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
```
* [MongoDB](http://www.mongodb.org/)

### Setup Environment ###

```
// Development Environtment
echo export NODE_ENV=development >> ~/.bash_profile
```
```
// Production Environtment
echo export NODE_ENV=production >> ~/.bash_profile
```
```
// Port Number
echo export NODE_PORT=100001 >> ~/.bash_profile
```

### Install Camtenoz-server ###
```
cd /path/to/camtenzo-server
npm install
```

### Run App ###
#### Using node Command ####
```
cd /path/to/camtenzo-server
node ./bin/www.js
```
Using command above, you have to restart the server everytime you modified the source code.
#### Using nodemon command ####
##### Installing #####
```
npm install -g nodemon
```
##### Run App #####
```
cd /path/to/camtenzo-server
nodemon ./bin/www.js
```
Using command above will auto-restart the server everytime the source code is modified.