var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var resultSchema = new mongoose.Schema({
    user: {
        email: String,        
    },
    institute: {
        id: Number,
        name: String
    },
    exam: {
        id: Number,
        name: String
    },
    value: Number   
});

var Result = mongoose.model('Result', resultSchema);

module.exports = Result;