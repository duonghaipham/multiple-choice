const router = require('express').Router();

const examController = require('../controllers/exam.controller');

router.get('/:id', examController.getExam);

module.exports = router;