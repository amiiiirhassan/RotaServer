const Router = require('express');
const auth = require ('../middlewares/auth');
const authRouter = Router();
authRouter.post('/', auth);
module.exports = authRouter;
