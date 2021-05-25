const mongoose = require('mongoose');
mongoose.connect('');
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name: String,
    email: String,
    password: String
    
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;