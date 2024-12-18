const bcrypt = require('bcrypt');

const User = require('../models/userModel.js');

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
exports.loginUser = (req, res) => {
    // リクエストボディからメールアドレスとパスワードを取得

    const { username, password } = req.body;
    console.log(password)
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

            // パスワードが一致する場合のレスポンス（ログイン成功）
            res.status(200).json({ message: 'Login successful' });
        });
    });
};