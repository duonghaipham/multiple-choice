const userModel = require('../models/user.model');
const examModel = require('../models/exam.model');
const { ITEM_PER_PAGE } = require("../configs/constant.config");

const postCreateExam = async (req, res, next) => {
  try {

  } catch (error) {
    return res.status(400).json({ 'message': 'Failed' });
  }
};

const getRetrieveExams = async (req, res, next) => {
  try {
    const { page } = req.query;

    const exams = await examModel
      .find({})
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE)
      .populate('creator', 'name');

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ 'message': 'Failed' });
  }
};

const putUpdateExam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { attemptLimit, minuteLimit, subject } = req.body;

    await examModel.findByIdAndUpdate(id, { attemptLimit, minuteLimit, subject });

    return res.status(200).json({ 'message': `Update exam ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find delete exam ${id}` });
  }
};

const deleteExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    await examModel.findByIdAndUpdate(id, { isDeleted: true });

    return res.status(200).json({ 'message': `Deleted exam ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and delete exam` });
  }
};

const postCreateUser = async (req, res, next) => {
  try {
    const { name, gender, city, phone, email, password, roles, state } = req.body;

    await userModel.create({ name, gender, city, phone, email, password, roles, state });

    return res.status(201).json({ 'message': 'Success' });
  } catch (error) {
    return res.status(400).json({ 'message': 'Failed' });
  }
};

const getRetrieveUsers = async (req, res, next) => {
  try {
    const { page } = req.query;

    const exams = await userModel
      .find({})
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE);

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ 'message': `Failed` });
  }
};

const putUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, gender, city, phone, email, avatar } = req.body;

    await userModel.findByIdAndUpdate(id, { name, gender, city, phone, email, avatar });

    return res.status(200).json({ 'message': `Update user ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and update user` });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userModel.findByIdAndUpdate(id, { state: 'deleted' });

    return res.status(200).json({ 'message': `Delete user ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and delete user` });
  }
};

module.exports = {
  postCreateExam,
  getRetrieveExams,
  putUpdateExam,
  deleteExam,
  postCreateUser,
  getRetrieveUsers,
  putUpdateUser,
  deleteUser,
};