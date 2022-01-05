const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const roleExamMiddleware = async (req, res, next) => {
  
  if (req.headers.access_token) {
    const decodedAuth = await jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET_KEY
    );
    const { userId } = decodedAuth;
    const user = await userModel.findById(userId);
    if (user.role === "teacher" || user.role === "student") {
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

module.exports = { roleExamMiddleware };
