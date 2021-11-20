const router = require('express').Router();

const adminController = require('../controllers/admin.controller');

router.post('/exam/create', adminController.postCreateExam);

router.get('/exam/retrieve', adminController.getRetrieveExam);

router.put('/exam/update/:id', adminController.putUpdateExam);

router.delete('/exam/delete/:id', adminController.deleteExam);

module.exports = router;