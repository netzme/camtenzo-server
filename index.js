/**
 * Created by untung on 15/10/14.
 */
var express = require("express");
var app = new express();

var main = require("./src/routes/index");
var photo = require("./src/routes/photo");

app.use('/', main);
app.use('/photo', photo);

module.exports = app;
