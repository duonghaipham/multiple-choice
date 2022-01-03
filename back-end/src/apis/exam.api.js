const router = require("express").Router();

const examController = require("../controllers/exam.controller");

router.get("/", examController.getRetrieveExams);

router.get("/:id", examController.getExamView);

router.get("/:id/take", examController.getExamTake);

router.post("/:id/take", examController.postExamTake);

router.get("/:id/review", examController.getExamReview);

// khi m dang nhap roi va vai tro m phai la student, hoac teacher

module.exports = router;
