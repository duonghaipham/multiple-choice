const userModel = require('../models/user.model');
const examModel = require('../models/exam.model');
const questionModel = require('../models/question.model');
const optionModel = require('../models/option.model');

const { ITEM_PER_PAGE } = require('../configs/constant.config');

// Tạo một đề thi mới
const postCreateExam = async (req, res, next) => {
  try {
    const { creator, attemptLimit, minuteLimit, subject, questions } = req.body;

    const examQuestions = [];

    for (const question of questions) {
      const options = [];
      let correctOption;

      for (const option of question.options) {
        const {_id} = await optionModel.create({content: option});
        options.push(_id);

        if (question.correctOption === option)
          correctOption = _id;
      }

      const { _id } = await questionModel.create({ content: question.content, correctOption, options });
      examQuestions.push(_id);
    }

    const exam = await examModel.create({ creator, attemptLimit, minuteLimit, subject, questions: examQuestions });

    return res.status(200).json({ 'message': 'Successfully' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ 'message': 'Failed' });
  }
};

// Lấy danh sách đề thi
const getRetrieveExams = async (req, res, next) => {
  try {
    let { page } = req.query;
    if (page === undefined) {
      page = 1;
    }

    const exams = await examModel
      .find({ isDeleted: false })
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE)
      .populate('creator', 'name');

    return res.status(200).json(exams);
  } catch (error) {
    console.log(error);
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

// Xóa một đề bằng cách gán isDeleted bằng true
const deleteExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    await examModel.findByIdAndUpdate(id, { isDeleted: true });

    return res.status(200).json({ 'message': `Deleted exam ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and delete exam` });
  }
};

// Tạo một người dùng mới
const postCreateUser = async (req, res, next) => {
  try {
    const { name, gender, city, phone, email, password, roles, state } = req.body;

    await userModel.create({ name, gender, city, phone, email, password, roles, state });

    return res.status(201).json({ 'message': 'Success' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ 'message': 'Failed' });
  }
};

// Lấy danh sách người dùng theo phân trang
const getRetrieveUsers = async (req, res, next) => {
  try {
    let { page } = req.query;
    if (page === undefined)
      page = 1;

    const exams = await userModel
      .find({ state: 'deleted' })
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE);

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ 'message': `Failed` });
  }
};

// Cập nhật thông tin người dùng
const putUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, gender, city, phone } = req.body;

    await userModel.findByIdAndUpdate(id, { name, gender, city, phone });

    return res.status(200).json({ 'message': `Update user ${id} successfully` });
  } catch (error) {
    return res.status(400).json({ 'message': `Cannot find and update user` });
  }
};

// Xóa người dùng bằng cách đặt trạng thái là deleted
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