const mongoose = require('mongoose')
const User = require('../models/User')
async function AddUser(_phoneNumber,_verifyCode) {
    let user = await User.findOne({ phoneNumber: _phoneNumber });
    if (user) {
        user.verifyCode = _verifyCode;
        await user.save();
        console.log('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            phoneNumber: _phoneNumber,
            verifyCode: _verifyCode
        });
        await user.save();
        //res.send(user);
    }
}
module.exports = AddUser
