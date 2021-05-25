const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@myfsdproject.1vykv.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    name: String,
    works: String,
    image: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;