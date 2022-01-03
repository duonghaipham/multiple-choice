const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const adminMiddleware = async (req, res, next) => {
  //giải mã token lấy userId
  if (req.headers.access_token) {
    const decodedAuth = await jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET_KEY
    );
    const { userId } = decodedAuth;
  }
};

module.exports = { adminMiddleware };
