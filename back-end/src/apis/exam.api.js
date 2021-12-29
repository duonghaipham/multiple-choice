const router = require('express').Router();

const examController = require('../controllers/exam.controller');

router.get('/:id', examController.getExamView);

router.get('/:id/take', examController.getExamTake);

router.post('/:id/take', examController.postExamTake);

router.get('/:id/review/:attempt', examController.getExamReview);

module.exports = router;