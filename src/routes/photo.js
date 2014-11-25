/**
 * Created by untung on 15/10/14.
 */
var express = require('express');
var router = express.Router();
var fs = require("fs");
var qs = require("querystring");

var photoIdReq = null;
var modelUserPhoto = require("../models/UserPhoto");

router.route('/:user')
    .get(function(req, res, next){
        modelUserPhoto.find({"username": req.params.user}, function(err, data){
            if (err) {
                return res.json({error: err});
            }
            return res.json(data);
        });
    })
    .post(function(req, res, next){
        var tmpUploadFile = req.files.post_item.path;
        var pathUpload = req.app.settings.pathUpload;
        modelUserPhoto.getNextPhotoId(function(err, data){
            if (err) {
                return res.json(err);
            }
            var savedFilename = pathUpload + '/' + 'NM_' + req.params.user + '_' + data.seq + '.' + req.files.post_item.extension;
            fs.createReadStream(tmpUploadFile)
                .pipe(fs.createWriteStream(savedFilename))
                .on('error', function(err){
                    return res.json({error: err});
                })
                .on('close', function(){
                    fs.unlink(tmpUploadFile);
                    modelUserPhoto.create({
                        photo_id: data.seq,
                        username: req.params.user,
                        pathPhoto: savedFilename,
                        caption: null
                    }, function(err, savedData){
                        if (err) {
                            return res.json({error: err});
                        } else {
                            return res.json({_id: savedData._id});
                        }
                    });
                });
        });
    });

router.route('/:user/:photo_id')
    .get(function(req, res, next){
        modelUserPhoto.findOne({"username": req.params.user, "photo_id": req.params.photo_id}, function(err, data){
            if (err) {
                return res.json({error: err});
            } else if (data === null) {
                var e = new Error('Data not found.');
                return res.json({error: { message: e.message }});
            } else {
                fs.readFile(data.pathPhoto, function (err, imageData) {
                    if (err) {
                        return res.json({error: err});
                    }
                    return res.end(imageData, 'binary');
                });
            }
        });
    });


module.exports = router;
