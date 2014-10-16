/**
 * Created by untung on 15/10/14.
 */
var expect = require("expect.js");
var http = require("http");

var app = require("../index");
var serverListenPort = 3000;
var server = null;

/**
 * Setup
 */
before(function(done){
    server = app.listen(serverListenPort);
    done();
});

describe("Simple testing server", function(){
    it("should not error 404", function(done){
        var requestedUrl = "http://localhost:3000/";
            http.get(requestedUrl, function(res){
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });
});

after(function(done){
    server.close();
    done();
});

