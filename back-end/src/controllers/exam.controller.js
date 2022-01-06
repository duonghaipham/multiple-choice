const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const examModel = require("../models/exam.model");
const workModel = require("../models/work.model");
const questionModel = require("../models/question.model");
const optionModel = require("../models/option.model");
const { ITEM_PER_PAGE } = require("../configs/constant.config");

const getRetrieveExams = async (req, res, next) => {
  try {
    let { page, subject } = req.query;
    if (page === undefined) {
      page = 1;
    }

    const filter = { isDeleted: false };
    if (subject !== undefined) {
      filter.subject = subject;
    }

    const exams = await examModel
      .find(filter)
      .skip((page - 1) * ITEM_PER_PAGE)
      .limit(ITEM_PER_PAGE)
      .populate("creator", "name")
      .lean();

    let userId = "";

    if (req.headers.access_token) {
      const decodedAuth = await jwt.verify(
        req.headers.access_token,
        process.env.JWT_SECRET_KEY
      );
      userId = decodedAuth.userId;
    }

    for (const exam of exams) {
      exam.isEditable = exam.creator._id.toString() === userId;

      if (userId) {
        const work = await workModel.findOne({
          candidate: mongoose.Types.ObjectId(userId),
          exam: exam._id,
        });

        work ? (exam.isDone = true) : (exam.isDone = false);
      } else {
        exam.isDone = false;
      }
    }

    return res.status(200).json(exams);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Failed" });
  }
};

// Xem một đề thi, chỉ những thông tin mô tả, không bao gồm các câu hỏi
const getExamView = async (req, res, next) => {
  try {
    const { id } = req.params;
    const decodedAuth = await jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET_KEY
    );
    const { userId } = decodedAuth;

    const exam = await examModel.findById(id);
    const works = await workModel
      .find({ candidate: userId, exam: exam._id })
      .select("attempt submittedAt secondTaken outOf");
    const statusExam = { ...exam._doc, works };

    return res.status(200).json(statusExam);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Cannot find the exam" });
  }
};

// Lấy tất cả thông tin của đề thi, bao gồm câu hỏi
const getExamTake = async (req, res, next) => {
  try {
    const { id } = req.params;
    const exam = await examModel
      .findById(id)
      .populate("creator", "name")
      .populate({
        path: "questions",
        select: "order content",
        populate: {
          path: "options",
        },
      });
    return res.status(200).json(exam);
  } catch (error) {
    return res.status(400).json({ message: "Cannot fetch data" });
  }
};

// Nộp bài
const postExamTake = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { secondTaken, options } = req.body;

    const decodedAuth = await jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET_KEY
    );
    const { userId } = decodedAuth;

    const works = await workModel.find(
      {
        exam: mongoose.Types.ObjectId(id),
        candidate: mongoose.Types.ObjectId(userId),
      },
      "attempt"
    );
    const attempts = [0];
    attempts.push(...works.map((work) => work.attempt));
    const nextAttempt = Math.max(...attempts) + 1;

    let outOf = 0;
    for (const option of options) {
      const { correctOption } = await questionModel.findById(option.question);
      if (correctOption && correctOption.toString() === option.option) outOf++;
    }

    const work = await workModel.create({
      candidate: userId,
      exam: id,
      attempt: 1,
      secondTaken,
      options,
      outOf,
    });

    return res.status(200).json({ message: "Sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Submission denied" });
  }
};

// Xem thông tin làm bài
const getExamReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const decodedAuth = await jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET_KEY
    );
    const { userId } = decodedAuth;

    const works = await workModel
      .findOne({
        candidate: userId,
        exam: id,
      })
      .populate({
        path: "options.question",
        select: "content correctOption options",
        populate: {
          path: "correctOption options",
        },
      })
      .populate("options.option")
      .populate({
        path: "exam",
        populate: {
          path: "creator",
          select: "name",
        },
      });

    return res.status(200).json(works);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Cannot fetch data" });
  }
};

module.exports = {
  getRetrieveExams,
  getExamView,
  getExamTake,
  postExamTake,
  getExamReview,
};
