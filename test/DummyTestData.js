/**
 * Created by untung on 15/10/14.
 */
// Models
var userPhoto = require("../src/models/UserPhoto");

// Library
var fs = require("fs"),
    path = require("path");

// Photo User test data
exports.initPhotoUserTestData = function () {
    userPhoto.remove({}, function (err) {
        if (err) {
            throw err;
        }
    });
    var PhotoDao1 = new userPhoto({
        "photo_id": 1,
        "username": "daori",
        "pathPhoto": __dirname + "/uploadImageDir/NM_daori_1.JPG",
        "caption": "narsis 1"
    });
    PhotoDao1.save();
    var PhotoDao2 = new userPhoto({
        "photo_id": 2,
        "username": "daori",
        "pathPhoto": __dirname + "/uploadImageDir/NM_daori_2.JPG",
        "caption": "narsis 2"
    });
    PhotoDao2.save();
    var PhotoDao3 = new userPhoto({
        "photo_id": 3,
        "username": "daori",
        "pathPhoto": __dirname + "/uploadImageDir/NM_daori_3.JPG",
        "caption": "narsis 3"
    });
    PhotoDao3.save();
    var PhotoDao4 = new userPhoto({
        "photo_id": 4,
        "username": "daori",
        "pathPhoto": __dirname + "/uploadImageDir/NM_daori_4.JPG",
        "caption": "narsis 4"
    });
    PhotoDao4.save();
}

// Dummy form data request post photo
exports.removeUploadedTestPhoto = function () {
    var pathUpload = __dirname + "/uploadImageDir/";
    fs.readdir(pathUpload, function (err, list) {
        if (err) {
            return err;
        }
        list.forEach(function (file){
            if ((path.extname(file) !== '') && (path.extname(file) !== '.JPG')) {
                fs.unlink(pathUpload + file, function(err){
                    if (err) {
                        return err;
                    }
                });
            }
        });
    });
}