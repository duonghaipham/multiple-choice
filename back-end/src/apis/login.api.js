const router = require('express').Router();

const loginController = require('../controllers/login.controller');

router.post('/', loginController.postLogin);

router.post('/logout', loginController.postLogout);

module.exports = router;