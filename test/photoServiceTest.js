/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var env = require("../conf/env");
var app = env.test.app;
var port = env.test.port;
var server = null;

describe("Photo service API", function(){

    before(function(done){
        server = app.listen(port, function(){
            done();
        });
    });

    var requestedUrl = "http://localhost:" + port + "/photo/1/";
    describe("Testing GET data from database", function(){
        var expectedResponse = require("./DummyPhotoData");
        it("user request should registered", function(done){
            http.get(requestedUrl, function(response){
                response.on('data', function(data){
                    var resData = JSON.parse(data.toString());
                    expect(resData.user).to.be.equal('1');
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