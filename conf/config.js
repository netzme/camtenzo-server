/**
 * Created by untung on 16/10/14.
 */
var Production = {
    "host": "localhost",
    "port": process.env.PORT || 3000,
    "app": require("../index")
};

module.exports = Production;