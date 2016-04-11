var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    twitterID: String,
    token: String,
    username: String,
    displayName: String,
    photo: String
});

module.exports = mongoose.model('User', User);
