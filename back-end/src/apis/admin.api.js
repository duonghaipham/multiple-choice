const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

router.post('/exams/create', adminController.postCreateExam);

router.get('/exams', adminController.getRetrieveExams);

router.put('/exams/:id/update', adminController.putUpdateExam);

router.delete('/exams/:id/delete', adminController.deleteExam);

router.post('/users/create', adminController.postCreateUser);

router.get('/users', adminController.getRetrieveUsers);

router.put('/users/:id/update', adminController.putUpdateUser);

router.delete('/users/:id/delete', adminController.deleteUser);

module.exports = router;