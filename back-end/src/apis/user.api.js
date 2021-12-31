const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.postRegister);

module.exports = router;