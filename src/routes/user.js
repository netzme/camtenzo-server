/**
 * Created by untung on 21/10/14.
 */
var express = require('express');
var router = express.Router();

var modelUser = require("../models/User");

router.route('/:username')
    .get(function(req, res, next){
        var username = req.params.username;
        modelUser.find({"username": username}, function(err, users){
            if (err) {
                console.log(err.code + " : " + err.messages);
                next(err);
            }
            res.end(JSON.stringify({"users": users}));
        })
    });

module.exports = router;