const mongoose = require('mongoose');
const User = require('../models/User');
async function CheckTokenIsValid(_token) {
    let user = await User.findOne({ token: _token });
    if(user) {
        return true
    }
    return false

}
module.exports = CheckTokenIsValid