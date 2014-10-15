/**
 * Created by untung on 15/10/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.writeHead(200);
    response.end();
});

module.exports = router;