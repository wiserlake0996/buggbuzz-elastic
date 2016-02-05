var mongoose = require('../../config/db-config.js');

var Schema = mongoose.Schema;

var BugSubmit = new Schema({
    description: String,
    body: String,
    date: Date
});

var EmailSubmit = new Schema({
    email: String,
    date: Date
});

module.exports.bugSubmit = mongoose.model('bugSubmit',BugSubmit);
module.exports.emailSubmit = mongoose.model('emailSubmit',EmailSubmit);