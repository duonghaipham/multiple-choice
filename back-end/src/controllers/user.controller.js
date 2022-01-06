const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const jwtConfig = require('../configs/jwt.config');
const constants = require('../configs/constant.config');
const userModel = require('../models/user.model');

const postRegister = async (req, res) => {
  try {
    const { name, gender, city, phone, email, password, grade, role } = req.body;

    const checkUser = await userModel.findOne({ email });

    if (!checkUser) {
      const user = await userModel.create({
        name,
        gender,
        city,
        phone,
        email,
        password,
        grade,
        role
      });

      const refreshToken = await jwtConfig.encodedToken(
        process.env.JWT_SECRET_REFRESH_KEY,
        { userId: user._id },
        constants.JWT_REFRESH_EXPIRES_TIME
      );

      const token = await jwtConfig.encodedToken(
        process.env.JWT_SECRET_KEY,
        { userId: user._id }
      );

      // userModel.updateOne({ _id: user._id }, { refreshToken });

      res.cookie('access_token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + constants.COOKIE_EXPIRES_TIME)
      });

      return res.status(200).json({
        refreshToken,
        message: 'Success',
        user: {
          name: user.name,
          role: user.role,
          avatar: user.avatar
        }
      });
    }
    else {
      return res.status(401).json({ message: 'Email existed' });
    }

  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Failed' });
  }
}

module.exports = { postRegister };