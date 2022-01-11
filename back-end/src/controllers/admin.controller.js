const mongoose = require("mongoose");

const userModel = require("../models/user.model");

const { ITEM_PER_PAGE } = require("../configs/constant.config");
const jwt = require("jsonwebtoken");

// Tạo một người dùng mới
const postCreateUser = async (req, res, next) => {
  try {
    const { name, gender, city, phone, email, password, roles, state } =
      req.body;

    await userModel.create({
      name,
      gender,
      city,
      phone,
      email,
      password,
      roles,
      state,
    });

    return res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed" });
  }
};

// Cập nhật thông tin người dùng
const getUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);

    return res.status(200).json({ message: `Success`, user });
  } catch (error) {
    return res.status(400).json({ message: `Failed` });
  }
}

// Cập nhật thông tin người dùng
const putUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, gender, city, phone } = req.body;

    await userModel.findByIdAndUpdate(id, { name, gender, city, phone });

    return res.status(200).json({ message: `Success` });
  } catch (error) {
    return res.status(400).json({ message: `Failed` });
  }
};

// Xóa người dùng bằng cách đặt trạng thái là deleted
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userModel.findByIdAndUpdate(id, { state: "deleted" });

    return res.status(200).json({ message: `Success` });
  } catch (error) {
    return res.status(400).json({ message: `Failed` });
  }
};

module.exports = {
  postCreateUser,
  getUpdateUser,
  putUpdateUser,
  deleteUser,
};
