const authController = require("../controllers/authController")
const express = require('express');

const router = express.Router();
router.post('/login', authController.loginUser)
router.post('/create', authController.createUser);

module.exports = router;