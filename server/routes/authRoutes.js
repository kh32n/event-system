const authController = require("../controllers/authController")
const express = require('express');

const router = express.Router();
router.post('/user/login', authController.loginUser)
router.post('/user/create', authController.createUser);

module.exports = router;