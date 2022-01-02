const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtConfig = require("../configs/jwt.config");
const constants = require("../configs/constant.config");
const userModel = require("../models/user.model");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user)
      return res
        .status(406)
        .json({ message: "Account not existed", email: "1" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Password is incorrect" });
    else {
      const refreshToken = await jwtConfig.encodedToken(
        process.env.JWT_SECRET_REFRESH_KEY,
        { userId: user._id },
        constants.JWT_REFRESH_EXPIRES_TIME
      );

      const token = await jwtConfig.encodedToken(process.env.JWT_SECRET_KEY, {
        userId: user._id,
      });

      userModel.updateOne({ _id: user._id }, { refreshToken });

      res.cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + constants.COOKIE_EXPIRES_TIME),
      });

      return res.status(200).json({
        refreshToken: token,
        message: "Success",
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        },
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Failed", error });
  }
};

const postLogout = async (req, res) => {
  try {
    userModel.updateOne({ _id: userId }, { refreshToken: null });
    res.clearCookie("access_token");
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: "Failed" });
  }
};

module.exports = { postLogin, postLogout };
