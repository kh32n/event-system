const authController = require("../controllers/authController")
const express = require('express');

//ユーザー認証関連の処理
const router = express.Router();
//ログイン
router.post('/login', authController.loginUser)
//サインアップ
router.post('/create', authController.createUser);
//ユーザー更新
router.put('/update', authController.updateUserProfile);
module.exports = router;