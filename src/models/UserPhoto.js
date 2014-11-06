/**
 * Created by untung on 21/10/14.
 */
var mongoose = require("mongoose"),
    path = require("path"),
    collectionName = path.basename(__filename, '.js');
    userPhotoSchemas = require("../schemas/UserPhoto");

userPhotoSchemas.statics.getNextPhotoId = function getNextPhotoId(callback) {
    var Counter = require("./Counter");
    Counter.findOneAndUpdate(
        {_id: collectionName + "Seq"},
        { $inc: { seq: 1 } },
        { upsert: true, new: true }, callback);
}

var UserPhoto = mongoose.model(collectionName, userPhotoSchemas);
module.exports = UserPhoto;