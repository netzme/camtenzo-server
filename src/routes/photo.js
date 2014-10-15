/**
 * Created by untung on 15/10/14.
 */
var express = require('express');
var router = express.Router();

var photoIdReq = null;
var dummyData = require("../../test/DummyPhotoData");

router.route('/:user/*')
    .get(function(req, res, next){
        var params = req.params[0];
        var returnData = {
            "user" : req.params.user,
            "data" : dummyData
        };
        photoIdReq = params ? params : null;
        res.end(JSON.stringify(returnData));
    })
    .post(function(req, res,next){
        next(new Error('Not Implemented yet.'));
    })
    .put(function(req, res, next){
        next(new Error('Not Implemented yet.'));
    })
    .delete(function(req, res, next){
        next(new Error('Not Implemented yet.'));
    });

module.exports = router;
