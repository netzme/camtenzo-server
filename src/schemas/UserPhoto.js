/**
 * Created by untung on 21/10/14.
 */
var mongoose = require("mongoose");

var UserPhoto = new mongoose.Schema({
    photo_id: {type: Number, unique: true},
    username: {type: String},
    pathPhoto: {type: String, unique: true},
    caption: {type: String},
    insertDate: {type: Date, default: Date.now}
});

module.exports = UserPhoto;