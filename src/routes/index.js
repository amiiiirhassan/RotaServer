const Router = require('express');
const auth = require ('../middlewares/auth');
const updateProfile = require('../middlewares/updateProfile');
const authRouter = Router();
const updateUserRouter = Router();
authRouter.post('/', auth);

updateUserRouter.post('/', updateProfile);

module.exports = {
    authRouter,
    updateUserRouter
};
