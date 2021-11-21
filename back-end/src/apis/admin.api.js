const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

router.post('/exam/create', adminController.postCreateExam);

router.get('/exam/retrieve', adminController.getRetrieveExams);

router.put('/exam/update/:id', adminController.putUpdateExam);

router.delete('/exam/delete/:id', adminController.deleteExam);

router.post('/user/create', adminController.postCreateUser);

router.get('/user/retrieve', adminController.getRetrieveUsers);

router.put('/user/update/:id', adminController.putUpdateUser);

router.delete('/user/delete/:id', adminController.deleteUser);

module.exports = router;