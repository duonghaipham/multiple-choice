const router = require('express').Router();

const loginController = require('../controllers/login.controller');

router.post('/', loginController.postLogin);

module.exports = router;