
const express = require('express');
const authController = require("../controllers/authController")
const userController = require('../controllers/userController');

const router = express.Router();


router.post('/create/users', userController.createUser);
router.post('/login/user', authController.loginUser)

module.exports = router;