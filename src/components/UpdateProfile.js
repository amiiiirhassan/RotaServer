const mongoose = require('mongoose');
const User = require('../models/User');
async function UpdateProfile(editedUser) {
    let user = await User.findOne({ token: editedUser.token });
    if(user) {
        user.fullName = editedUser.fullName || user.fullName || "";
        user.email = editedUser.email || user.email || "";
        user.birthday = editedUser.birthday || user.birthday || "";
        user.weight = editedUser.weight || user.weight || "";
        user.height = editedUser.height || user.height || "";
        user.sex = editedUser.sex || user.sex || "";
        user.profileImage = editedUser.profileImage || user.profileImage || "";
        await user.save();
        return true
    }
    return false

}
module.exports = UpdateProfile