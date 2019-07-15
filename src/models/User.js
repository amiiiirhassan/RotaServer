const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    token: String,
    verifyCode: Number
})
const User = mongoose.model('User',userSchema);
module.exports = User