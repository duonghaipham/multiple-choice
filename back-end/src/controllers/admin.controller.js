const userModel = require('../models/user.model');
const examModel = require('../models/exam.model');
const { ITEM_PER_PAGE } = require("../configs/constant.config");

const postCreateExam = async (req, res, next) => {
  try {

  } catch (error) {
    return res.status(400).json({ 'message': 'Failed' });
  }
};

const getRetrieveExam = async (req, res, next) => {
  try {
    const { page } = req.query;

    const exams = await examModel
      .find()
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE)
      .populate('creator', 'name');

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ 'message': 'Failed' });
  }
}

const putUpdateExam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { attemptLimit, minuteLimit, subject } = req.body;

    examModel.findByIdAndUpdate(id, { attemptLimit, minuteLimit, subject });

    return res.status(200).json({ 'message': `Update exam ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find delete exam ${id}` });
  }
};

const deleteExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    examModel.findByIdAndUpdate(id, { isDeleted: true });

    return res.status(200).json({ 'message': `Deleted exam ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and delete exam ${id}` });
  }
};

module.exports = { postCreateExam, getRetrieveExam, putUpdateExam, deleteExam };