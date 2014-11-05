/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var fs = require("fs");
var FormData = require("form-data");

//var env = require("../conf/config-test");
var app = require('../index');
var port = process.env.NODE_PORT || 3000;
var server = null;

describe("Photo service API", function(){

    before(function(done){
        // setup data test
        var dummyData = require("./DummyTestData");
        dummyData.initPhotoUserTestData();
        // start server
        server = app.listen(port, function(){
            done();
        });
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

    var url3 = "http://localhost:" + port + "/photo/daori";
    describe("When POST url " + url3, function(){
        var formData = new FormData();
        formData.append('post_item', fs.createReadStream(__dirname + "/dummyPostImageData/dummy_photo_1.png"));
        var pathUpload = app.get('pathUpload');
        it("should upload file to upload path in " + pathUpload, function(done){
            formData.submit(url3, function(err, res){
                expect(fs.existsSync(pathUpload + "/dummy_photo_1.png")).to.be.equal(true);
                done();
            })
        });
        it("should save data to database with username 'daori'");
        it("should return message success if process");
    });

    after(function(){
        server.close();
    });
});