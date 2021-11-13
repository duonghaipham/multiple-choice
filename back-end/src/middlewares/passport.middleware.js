const jwt = require('jsonwebtoken');

const userModel = require('../models/user.model');

const jwtAuthentication = async (req, res, next) => {
    res.locals.isAuth = false;
    const token = req.cookies.access_token;
    if (!token) {
        next();
        return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
        const { userId } = decoded;
        const user = await userModel.findById(userId);
        if (user) {
            res.locals.isAuth = true;
            req.user = user;
        }
    }
    next();
};

module.exports = jwtAuthentication;