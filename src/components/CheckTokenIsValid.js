const mongoose = require('mongoose');
const User = require('../models/User');
async function CheckTokenIsValid(_token) {
    let user = await User.findOne({ token: _token });
    if(user) {
        console.log(user.height);
        const _user = {
            fullName: user.fullName || "",
            email: user.email || "",
            birthday: user.birthday || "",
            weight: user.weight || "",
            phoneNumber: user.phoneNumber || "",
            image: user.image || "",
            height: user.height || ""
        }
        return _user
    }
    return false

}
module.exports = CheckTokenIsValid