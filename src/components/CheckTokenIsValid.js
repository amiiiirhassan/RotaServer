const mongoose = require('mongoose');
const User = require('../models/User');
async function CheckTokenIsValid(_token) {
    let user = await User.findOne({ token: _token });
    console.log(user)

    if(user) {
        const _user = {
            fullName: user.fullName || "",
            email: user.email || "",
            birthday: user.birthday || "",
            weight: user.weight || "",
            phoneNumber: user.phoneNumber || "",
            profileImage: user.profileImage.src || "",
            height: user.height || "",
            sex: user.sex || ""
        }
        return _user
    }
    return false

}
module.exports = CheckTokenIsValid