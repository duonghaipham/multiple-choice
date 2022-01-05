const router = require("express").Router();

const adminController = require("../controllers/admin.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

router.post("/exams/create", adminController.postCreateExam);

router.get("/exams", adminController.getRetrieveExams);

router.get("/exams/:id/update", adminController.getUpdateExam);

router.put("/exams/:id/update", adminController.putUpdateExam);

router.delete("/exams/:id/delete", adminController.deleteExam);

//Khi đăng nhập phải là admin mới sử dụng đc các api này
router.post(
  "/users/create",
  adminMiddleware.adminMiddleware, 
  adminController.postCreateUser, 
);

router.get(
  "/users",
  adminMiddleware.adminMiddleware,
  adminController.getRetrieveUsers
);

router.get(
  "/users/:id/update",
  adminMiddleware.adminMiddleware,
  adminController.getUpdateUser
);

router.put(
  "/users/:id/update",
  adminMiddleware.adminMiddleware,
  adminController.putUpdateUser
);

router.delete(
  "/users/:id/delete",
  adminMiddleware.adminMiddleware,
  adminController.deleteUser
);

module.exports = router;
