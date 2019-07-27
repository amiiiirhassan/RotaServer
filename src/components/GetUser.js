const mongoose = require('mongoose');
const User = require('../models/User');
async function GetUser(_phoneNumber) {
    let user = await User.findOne({ phoneNumber: _phoneNumber });
    if(user) {
        return user
    }
    return false

}
module.exports = GetUser