const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName: String,
    email: String,
    birthday: String,
    weight: String,
    height: String,
    sex: String,
    password: String,
    phoneNumber: String,
    token: String,
    profileImage: String,
    verifyCode: Number
})
const User = mongoose.model('User',userSchema);
module.exports = User