/**
* Created by untung on 05/11/14.
*/
var mongoose = require("mongoose"),
    path = require("path"),
    collectionName = path.basename(__filename, '.js');
    CounterSchema = require("../schemas/Counter"),
    CounterModel = mongoose.model(collectionName, CounterSchema);

module.exports = CounterModel;

