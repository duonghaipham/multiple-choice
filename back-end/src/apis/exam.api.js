const router = require("express").Router();

const examController = require("../controllers/exam.controller");
const roleExamMiddleware = require("../middlewares/roleExam.middleware");

router.get("/", roleExamMiddleware.roleExamMiddleware, examController.getRetrieveExams);

router.get(
  "/:id",
  roleExamMiddleware.roleExamMiddleware, 
  examController.getExamView
);

router.get(
  "/:id/take",
  roleExamMiddleware.roleExamMiddleware,
  examController.getExamTake
);

router.post(
  "/:id/take",
  
  examController.postExamTake
);

router.get(
  "/:id/review",
  
  examController.getExamReview
);

module.exports = router;
