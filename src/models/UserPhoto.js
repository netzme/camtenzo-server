/**
 * Created by untung on 21/10/14.
 */
var mongoose = require("mongoose");
var userPhotoSchemas = require("../schemas/UserPhoto");
var UserPhoto = mongoose.model('UserPhoto', userPhotoSchemas);

module.exports = UserPhoto;