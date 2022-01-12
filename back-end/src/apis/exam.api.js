const router = require("express").Router();

const examController = require("../controllers/exam.controller");
const roleExamMiddleware = require("../middlewares/roleExam.middleware");
const teacherMiddleware = require("../middlewares/teacher.middleware");

router.post(
  "/create",
  teacherMiddleware.teacherMiddleware,
  examController.postCreateExam
);

router.get(
  "/:id/update",
  teacherMiddleware.teacherMiddleware,
  examController.getUpdateExam
);

router.put(
  "/:id/update",
  teacherMiddleware.teacherMiddleware,
  examController.putUpdateExam
);

router.delete(
  "/:id/delete",
  teacherMiddleware.teacherMiddleware,
  examController.deleteExam
);

router.get(
  "/",
  roleExamMiddleware.roleExamMiddleware,
  examController.getRetrieveExams
);

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
  roleExamMiddleware.roleExamMiddleware,
  examController.postExamTake
);

router.get(
  "/:id/review",
  roleExamMiddleware.roleExamMiddleware,
  examController.getExamReview
);

module.exports = router;
