const router = require('express').Router();

const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const loginController = require('../controllers/login.controller');

router.post('/', loginController.login);

module.exports = router;