/**
 * Created by untung on 15/10/14.
 */
// Server setup
var express = require("express"),
    app = new express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    multer  = require('multer');

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Temporary uploaded file Setup
app.use(multer({dest: '/tmp/'}));

// Setup view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Setup Environment
var config = require("./conf/config"),
    appConfig = config(app.get('env'));
app.set('pathUpload', appConfig.upload.pathUpload);

// Database setup
var mongoose = require("mongoose");
mongoose.connect(appConfig.db.url);

// Routes / Entry poiny
var main = require("./src/routes/index"),
    photo = require("./src/routes/photo"),
    user = require("./src/routes/user");
app.use('/', main);
app.use('/photo', photo);
app.use('/user', user);

module.exports = app;