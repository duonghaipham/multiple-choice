const passportMiddleware = require('passport');
const jwt = require('jsonwebtoken');

const jwtAuthentication = async (req, res, next) => {
    res.locals.isAuth = false;
    const token = req.cookies.access_token;
    if (!token) {
        next();
        return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
        console.log(decoded.sub);
        const { accountId } = decoded.sub;
        const user = await AccountModel.findById(accountId);
        if (user) {
            res.locals.isAuth = true;
            req.user = user;
        }
    }
    next();
};