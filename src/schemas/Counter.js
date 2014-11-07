/**
 * Created by untung on 05/11/14.
 */
var mongoose = require("mongoose");
var CounterSchema = new mongoose.Schema({
    _id: {type: String, unique: true},
    seq: {type: Number, default: 0}
});

module.exports = CounterSchema;