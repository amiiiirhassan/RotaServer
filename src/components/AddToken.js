const {config} = require('../config/index')
const GetRandomNumber = require('../js/GetRandomNumber')
const User = require('../models/User')
const jwt = require('jsonwebtoken');

async function AddToken (_phoneNumber) {
  const RandomNumber = GetRandomNumber();
  let user = await User.findOne({ phoneNumber: _phoneNumber });
  if(user) {
      const token = jwt.sign({token:user.id + RandomNumber }, config.secret);      
      user.token = token;
      await user.save();
      return token
  }
    
}
module.exports = AddToken
