/**
 * Created by untung on 21/10/14.
 */
var Test = {
    "host": "localhost",
    "port": process.env.PORT || 100001,
    "app": require("../index-test")
};

module.exports = Test;