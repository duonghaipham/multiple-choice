const mongoose = require("mongoose");

const userModel = require("../models/user.model");
const examModel = require("../models/exam.model");
const questionModel = require("../models/question.model");
const optionModel = require("../models/option.model");

const { ITEM_PER_PAGE } = require("../configs/constant.config");
const jwt = require("jsonwebtoken");

// Tạo một đề thi mới
const postCreateExam = async (req, res, next) => {
  try {
    const { name, attemptLimit, minuteLimit, subject, grade, questions } =
      req.body;

    if (req.headers.access_token) {
      const decoded = await jwt.verify(
        req.headers.access_token,
        process.env.JWT_SECRET_KEY
      );
      const { userId } = decoded;

      const examQuestions = [];

      for (const question of questions) {
        const options = [];
        let correctOption;

        for (const option of question.options) {
          const { _id } = await optionModel.create({ content: option });
          options.push(_id);

          if (question.correctOption === option) correctOption = _id;
        }

        const { _id } = await questionModel.create({
          content: question.content,
          correctOption,
          options,
        });
        examQuestions.push(_id);
      }

      const exam = await examModel.create({
        name,
        attemptLimit,
        minuteLimit,
        subject,
        grade,
        creator: mongoose.Types.ObjectId(userId),
        questions: examQuestions,
      });

      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed" });
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
      .populate("creator", "name");

    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
};

// Lấy trang cập nhật đề thi
const getUpdateExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    const exam = await examModel
      .findById(id)
      .populate("creator", "name")
      .populate({
        path: "questions",
        select: "order content",
        populate: {
          path: "options correctOption",
        },
      });
    return res.status(200).json(exam);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Cannot fetch data" });
  }
};

// Cập nhật một đề thi
const putUpdateExam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, attemptLimit, minuteLimit, subject, grade, questions } =
      req.body;

    const examQuestions = [];

    for (const question of questions) {
      const questionOptions = [];
      let correctOption;

      for (const option of question.options) {
        const { _id: newOptionId } = await optionModel.findOneAndUpdate(
          { content: option },
          { content: option },
          { upsert: true, new: true }
        );

        if (option === question.correctOption) {
          correctOption = newOptionId;
        }

        questionOptions.push(newOptionId);
      }

      const { _id: newQuestionId } = await questionModel.findOneAndUpdate(
        { content: question.content },
        { content: question.content, correctOption, options: questionOptions },
        { upsert: true, new: true }
      );

      examQuestions.push(newQuestionId);
    }

    const exam = await examModel.findByIdAndUpdate(id, {
      name,
      attemptLimit,
      minuteLimit,
      subject,
      grade,
      questions: examQuestions,
    });

    return res.status(200).json({ message: `Success` });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: `Failed` });
  }
};

// Xóa một đề bằng cách gán isDeleted bằng true
const deleteExam = async (req, res, next) => {
  try {
    const { id } = req.params;

    await examModel.findByIdAndUpdate(id, { isDeleted: true });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(400).json({ message: `Failed` });
  }
};

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

// Lấy danh sách người dùng theo phân trang
const getRetrieveUsers = async (req, res, next) => {
  try {
    let { page } = req.query;
    if (page === undefined) page = 1;

    const exams = await userModel
      .find({ state: { '$ne': "deleted"} })
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE);
      
    return res.status(200).json(exams);
  } catch (error) {
    return res.status(400).json({ message: `Failed` });
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
  postCreateExam,
  getRetrieveExams,
  getUpdateExam,
  putUpdateExam,
  deleteExam,
  postCreateUser,
  getRetrieveUsers,
  getUpdateUser,
  putUpdateUser,
  deleteUser,
};
