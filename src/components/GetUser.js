const mongoose = require('mongoose');
const User = require('../models/User');
async function GetUser(_phoneNumber) {
    let user = await User.findOne({ phoneNumber: _phoneNumber });

    if(user) {

        let _user = {
            fullName: user.fullName || "",
            email: user.email || "",
            birthday: user.birthday || "",
            weight: user.weight || "",
            phoneNumber: user.phoneNumber || "",
            height: user.height || "",
            sex: user.sex || ""
        }
        return _user
    }
    return false

}
module.exports = GetUser