const userController = require("../controllers/userController.js");
const express = require('express');

const router = express.Router();
//ユーザー情報取得
router.post('/get', userController.getProfile);


module.exports = router;