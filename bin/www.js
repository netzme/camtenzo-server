/**
 * Created by untung on 15/10/14.
 */
var app = require("./../index");
var port = process.env.NODE_PORT || 3000

app.listen(port, function(){
    console.log("server listening at port " + port);
})