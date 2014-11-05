/**
 * Created by untung on 16/10/14.
 */
var mongoose = require("mongoose");
var userSchemas = require("../schemas/User");
var User = mongoose.model('User', userSchemas);

module.exports = User;