/**
 * Created by untung on 15/10/14.
 */
var express = require("express");
var app = new express();

var main = require("./src/routes/index");

app.use('/', main);

module.exports = app;
