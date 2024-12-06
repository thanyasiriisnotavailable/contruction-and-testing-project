const express = require('express');
const accountController = require('../controllers/userController');

const router = express.Router();

router.get('/register', accountController.getRegisterPage);
router.get('/login', accountController.getLoginPage);
router.post('/register', accountController.postRegister);
router.post('/login', accountController.postLogin);
router.get('/profile', accountController.getProfilePage);

module.exports = router;
