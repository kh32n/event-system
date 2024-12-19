const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const User = require('../models/userModel.js');

exports.loginUser = (req, res) => {
    // リクエストボディからメールアドレスとパスワードを取得

    const { username, password } = req.body;
    // console.log(password)
    // データベースからメールアドレスを元にユーザー情報を検索する
    User.findByUserName(username, (err, user) => {
        // データベース操作中にエラーが発生した場合のエラーハンドリング
        if (err) return res.status(500).json({ error: 'Database error' });

        // 該当するユーザーが見つからない場合
        if (!user) return res.status(404).json({ error: 'User not found' });

        // 入力されたパスワードと、データベースに保存されているハッシュ化されたパスワードを比較

        bcrypt.compare(password, user.password, (err, isMatch) => {
            // パスワード比較中にエラーが発生した場合のエラーハンドリング
            if (err) return res.status(500).json({ error: 'Error comparing passwords' });

            // パスワードが一致しない場合
            if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

            const token = jwt.sign(
                { userId: user.id, username: user.username },
                'your_secret_key',
                { expiresIn: '1h' }
            );

            // パスワードが一致する場合のレスポンス（ログイン成功）
            res.status(200).json({ message: 'Login successful', token });
            // console.log(token)
        });
    });
};