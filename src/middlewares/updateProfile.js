const updateUserProfile = require('../components/UpdateProfile');
const updateProfile = (req,res,next) => {
    
    const body = req.body;
    const editedUser = {
        token: body.token,
        fullName: body.fullName,
        email: body.email,
        birthday: body.birthday,
        weight: body.weight,
        height: body.height,
        sex: body.sex,
        profileImage: body.profileImage
    }
    
    updateUserProfile(editedUser)
        .then((response) => {
            if(response === true) {
                res.send({ status: 200,message: "profile updated success!"});
            }
            else {
                res.send({ status: 401,message: "you don't have permision!"});
            }
        })
        .catch(err => console.log(err))
}
module.exports = updateProfile