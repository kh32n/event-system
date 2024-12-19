const bcrypt = require('bcrypt');

const User = require('../models/userModel.js');

//TODO:ログイン処理にJWT認証のやつをつける＝＞authControllerに記載、RouteもAuthRouteに書く


exports.createUser = (req, res) => {
    const { username, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err });

        User.createUser({ username, email, password: hashedPassword }, (err, result) => {
            // err が null または undefined でないことを確認
            if (err) {
                console.log(err); // デバッグ用にエラーをログに出力

                // err に code プロパティがある場合のみ処理
                if (err.code) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        if (err.sqlMessage.includes('username')) {
                            return res.status(400).json({ error: 'このユーザーIDはすでに使用されています。別のユーザーIDをお試しください。' });
                        }
                        if (err.sqlMessage.includes('email')) {
                            return res.status(400).json({ error: 'このメールアドレスはすでに使用されています。別のメールアドレスをお試しください。' });
                        }
                    }
                } else {
                    // err に code プロパティがない場合、一般的なデータベースエラーとして扱う
                    return res.status(500).json({ error: 'Database error' });
                }
            }
            // エラーがない場合、ユーザー作成成功のレスポンスを返す
            res.status(201).json({ message: 'User created successfully!' });
        });
    });
};
