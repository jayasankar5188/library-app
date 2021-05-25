const mongoose = require('mongoose');
mongoose.connect('');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name: String,
    works: String,
    image: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;