const bcrypt = require('bcrypt');

const User = require('../models/userModel.js');

exports.createUser = (req, res) => {
    // リクエストボディからユーザー名、メールアドレス、パスワードを取得
    const { username, email, password } = req.body;
    // console.log(username) デバッグ用
    // パスワードをハッシュ化する処理
    // bcrypt.hash(プレーンテキストパスワード, ソルトのラウンド数, コールバック関数)
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        // ハッシュ化中にエラーが発生した場合のエラーハンドリング
        if (err) return res.status(500).json({ error: err });

        // ハッシュ化されたパスワードを用いて、新しいユーザー情報をデータベースに保存する
        User.createUser({ username, email, password: hashedPassword }, (err, result) => {
            // データベース操作中にエラーが発生した場合のエラーハンドリング
            if (err) return res.status(500).json({ error: err });

            // 正常にユーザーが作成された場合のレスポンス
            res.status(201).json({ message: 'User created successfully!' });
        });
    });
};