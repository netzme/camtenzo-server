/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var fs = require("fs");
var FormData = require("form-data");

var app = require('../index');
var port = process.env.NODE_PORT || 3000;
var server = null;

describe("Photo service API", function(){
    var dummyData = require("./DummyTestData");

    before(function(done){
        // setup data test
        //dummyData.initPhotoUserTestData();
        // start server
        server = app.listen(port, function(){
            done();
        });
    });

    beforeEach(function(){
        // setup data test
        dummyData.initPhotoUserTestData();
    });

    var url1 = "http://localhost:" + port + "/photo/daori/1";
    describe("When request GET " + url1, function(){
        it("should return data username of 'daori' and photo_id of '1'", function(done){
            http.get(url1, function(response){
                response.on('data', function(data){
                    var resData = JSON.parse(data.toString());
                    expect(resData.username).to.be.equal('daori');
                    expect(resData.photo_id).to.be.equal(1);
                });
                response.on('end', function(){
                    done();
                });
            });
        });
    });

    var url2 = "http://localhost:" + port + "/photo/daori";
    describe("When request GET " + url2, function(){
        it("should return array data type with username of 'daori'", function(done){
            http.get(url2, function(response){
                response.on('data', function(data){
                    var resData = JSON.parse(data.toString());
                    expect(resData instanceof Array).to.be.equal(true);
                    resData.forEach(function(data) {
                        expect(data.username).to.be.equal('daori');
                    });
                });
                response.on('end', function(){
                    done();
                });
            });
        });
    });

    describe("When request POST http://localhost:" + port + "/photo/daori", function(){
        var pathUpload = app.get('pathUpload');
        var formData = {};
        it("should upload file to upload path in " + pathUpload, function(done){
            dummyData.removeUploadedTestPhoto();
            formData = new FormData();
            formData.append('post_item', fs.createReadStream(__dirname + "/dummyPostImageData/dummy_photo_1.png"));
            formData.submit("http://localhost:" + port + "/photo/daori", function(err, res){
                res.on('data', function(data) {
                    var modelUserPhoto = require("../src/models/UserPhoto");
                    modelUserPhoto.findOne({_id: JSON.parse(data.toString())._id}, function (err, userPhoto) {
                        if (err) {
                            return err;
                        }
                        expect(fs.existsSync(userPhoto.pathPhoto)).to.be.equal(true);
                        done();
                    });
                });
            });
        });
        it("should save data to database with username 'daori'", function(done){
            dummyData.removeUploadedTestPhoto();
            formData = new FormData();
            formData.append('post_item', fs.createReadStream(__dirname + "/dummyPostImageData/dummy_photo_1.png"));
            formData.submit("http://localhost:" + port + "/photo/daori", function(err, res){
                res.on('data', function(data){
                    var modelUserPhoto = require("../src/models/UserPhoto");
                    modelUserPhoto.findOne({_id: JSON.parse(data.toString())._id}, function(err, userPhoto){
                        if (err) {
                            return err;
                        }
                        expect(userPhoto).not.to.be(null);
                        expect(userPhoto.username).to.be.equal('daori');
                        done();
                    });
                });
            });

        });
    });

    after(function(){
        server.close();
    });
});