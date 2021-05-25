const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@myfsdproject.1vykv.mongodb.net/library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name: String,
    email: String,
    password: String
    
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;