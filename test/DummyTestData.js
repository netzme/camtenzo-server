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
        "pathPhoto": "/tmp/img1.jpg",
        "caption": "narsis 1"
    });
    PhotoDao1.save();
    var PhotoDao2 = new userPhoto({
        "photo_id": 2,
        "username": "daori",
        "pathPhoto": "/tmp/img2.jpg",
        "caption": "narsis 2"
    });
    PhotoDao2.save();
    var PhotoDao3 = new userPhoto({
        "photo_id": 3,
        "username": "daori",
        "pathPhoto": "/tmp/img3.jpg",
        "caption": "narsis 3"
    });
    PhotoDao3.save();
    var PhotoDao4 = new userPhoto({
        "photo_id": 4,
        "username": "daori",
        "pathPhoto": "/tmp/img4.jpg",
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
            if (path.extname(file) !== '') {
                fs.unlink(pathUpload + file, function(err){
                    if (err) {
                        return err;
                    }
                });
            }
        });
    });
}