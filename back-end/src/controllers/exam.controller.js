const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;

const examModel = require('../models/exam.model');
const workModel = require('../models/work.model');
const questionModel = require('../models/question.model');

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
    return res.status(400).json({ message: 'Cannot find the exam' });
  }
}

const getExamTake = async (req, res, next) => {
	try {
		const { id } = req.params;

		const exam = await examModel.findById(id);
		const questions = await questionModel.find({ exam: id });
		const fullExam = { ...exam._doc, questions };

		return res.status(200).json(fullExam);
	} catch (error) {
		return res.status(400).json({ message: 'Cannot fetch data' });
	}
};

const getExamReview = async (req, res, next) => {
  try {
    const { id, attempt } = req.params;
    const decodedAuth = await jwt.verify(req.cookies.access_token, process.env.JWT_SECRET_KEY);
    const { userId } = decodedAuth;

    const questions = await questionModel.find({ exam: id });
    const works = await Promise.all(
      questions.map(async (question) => {
        const optionChoosed = await workModel.findOne({
          candidate: userId,
          exam: id,
          'options.question': question._id
        });
        return { ...question._doc, optionChoosed };
      })
    );

    return res.status(200).json({ ...works });
  } catch (error) {
    return res.status(400).json({ message: 'Cannot fetch data' });
  }
};

module.exports = { getExamView, getExamTake, getExamReview };