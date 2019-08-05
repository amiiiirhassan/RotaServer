const mongoose = require('mongoose');
const User = require('../models/User');
const {develop} = require('../config/index')
async function CheckTokenIsValid(_token) {
    let user = await User.findOne({ token: _token });

    if(user) {
        let profileImageSrc = "";
        if(user.profileImage.name) {
            if(develop === true) {
                profileImageSrc = "http://localhost:3000/uploads/"+user.profileImage.name
            }
            else {
                profileImageSrc = "https://mysterious-lake-54391.herokuapp.com/uploads/"+user.profileImage.name

            }
        }
        const _user = {
            fullName: user.fullName || "",
            email: user.email || "",
            birthday: user.birthday || "",
            weight: user.weight || "",
            phoneNumber: user.phoneNumber || "",
            profileImage: profileImageSrc,
            height: user.height || "",
            sex: user.sex || ""
        }
        return _user
    }
    return false

}
module.exports = CheckTokenIsValid