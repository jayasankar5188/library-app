const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@myfsdproject.1vykv.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;