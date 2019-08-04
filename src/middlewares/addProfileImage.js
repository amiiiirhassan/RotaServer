
const fs = require('fs');

const User = require('../models/User');
const addProfileImage = async (req,res,next) => {
    const _token = req.headers.token;
    let user = await User.findOne({ token: _token });
    if(user) {
        if(user.profileImage.src) {
            fs.unlink(`uploads/${user.profileImage.name}`, (err) => {
                if (err)  return console.log(err);
                console.log('path/file.txt was deleted');
            });   
        }

            user.profileImage.src = req.file.path;
            user.profileImage.type = req.file.mimetype;
            user.profileImage.name = req.file.filename;
            await user.save();
            return res.send({ status: 200,message: "success"});
       
    }
    else {
        res.send({ status: 401,message: "you don't have permision!"});
    }
}
module.exports = addProfileImage