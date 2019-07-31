const Router = require('express');
const auth = require ('../middlewares/auth');
const updateProfile = require('../middlewares/updateProfile');
const addProfileImage = require('../middlewares/addProfileImage');
const authRouter = Router();
const updateUserRouter = Router();
const addProfileImageRouter = Router();

authRouter.post('/', auth);
updateUserRouter.post('/', updateProfile);
addProfileImageRouter.post('/', addProfileImage);

module.exports = {
    authRouter,
    updateUserRouter,
    addProfileImageRouter

};
