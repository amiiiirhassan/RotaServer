const mongoose = require('mongoose');
const User = require('../models/User');
async function CheckUserVerifyCode(_phoneNumber,_verifyCode) {
    let user = await User.findOne({ phoneNumber: _phoneNumber });
    if(Number(user.verifyCode) === Number(_verifyCode) ) {
        return true
    }
    return false

}
module.exports = CheckUserVerifyCode