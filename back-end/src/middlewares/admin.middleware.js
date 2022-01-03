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
    const user = await userModel.findById(userId);
    if (user.role === "admin") {
      next();
    } else {
      res.status(400).json({
        message: "Unauthorized",
      });
    }
  } else {
    res.status(400).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { adminMiddleware };
