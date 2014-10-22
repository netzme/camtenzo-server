/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var env = require("../conf/config-test");
var app = env.app;
var port = env.port;
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

    after(function(){
        server.close();
    });
});