const jwt = require('jsonwebtoken');

const examModel = require('../models/exam.model');
const workModel = require('../models/work.model');
const questionModel = require('../models/question.model');
const optionModel = require('../models/option.model');

// Xem một đề thi, chỉ những thông tin mô tả, không bao gồm các câu hỏi
const getExamView = async (req, res, next) => {
  try {
    const { id } = req.params;
    const decodedAuth = await jwt.verify(req.cookies.access_token, process.env.JWT_SECRET_KEY);
    const { userId } = decodedAuth;

    const exam = await examModel.findById(id);
    const works = await workModel.find({ candidate: userId, exam: exam._id }).select('attempt submittedAt secondTaken outOf');
    const statusExam = { ...exam._doc, works };

    return res.status(200).json(statusExam);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Cannot find the exam' });
  }
}

// Lấy tất cả thông tin của đề thi, bao gồm câu hỏi
const getExamTake = async (req, res, next) => {
	try {
		const { id } = req.params;

		const exam = await examModel
      .findById(id)
      .populate('creator', 'name')
      .populate({
        path: 'questions',
        select: 'order content',
        populate: {
          path: 'options'
        }
      });

		return res.status(200).json(exam);
	} catch (error) {
		return res.status(400).json({ message: 'Cannot fetch data' });
	}
};

// Xem thông tin làm bài
const getExamReview = async (req, res, next) => {
  try {
    const { id, attempt } = req.params;
    const decodedAuth = await jwt.verify(req.cookies.access_token, process.env.JWT_SECRET_KEY);
    const { userId } = decodedAuth;

    const works = await workModel
      .findOne({
        candidate: userId,
        exam: id,
        attempt: attempt
      })
      .populate({
        path: 'options.question',
        select: 'order content',
        populate: {
          path: 'correctOption'
        }
      })
      .populate('options.option');

    return res.status(200).json(works);
  } catch (error) {
    return res.status(400).json({ message: 'Cannot fetch data' });
  }
};

module.exports = {
  getExamView,
  getExamTake,
  getExamReview,
};