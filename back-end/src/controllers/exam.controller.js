const examModel = require('../models/exam.model');
const questionModel = require('../models/question.model');

const getExam = async (req, res, next) => {
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

module.exports = { getExam };