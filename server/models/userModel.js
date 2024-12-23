const db = require("../config/dbConfig.js")

const User = {
    // 新しいユーザーをデータベースに作成するメソッド
    // `data` オブジェクトには、ユーザー名、メールアドレス、ハッシュ化されたパスワードが含まれる
    // `callback` 関数は、SQLクエリが完了した後に実行される
    createUser: (data, callback) => {
        // ユーザー情報を挿入するための SQL クエリを作成
        // `?` プレースホルダを使用して、後で `db.query()` に渡される値を安全にバインドする
        const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

        // `db.query` メソッドを使用して、SQL クエリを実行
        // 第一引数: 実行するクエリ文字列
        // 第二引数: プレースホルダに置き換える値の配列
        // 第三引数: 実行完了後のコールバック関数
        db.query(query, [data.username, data.email, data.password], callback);
    },
    findByUserName: (username, callback) => {

        const query = `SELECT * FROM users WHERE username = ?`;

        // データベースに対してクエリを実行
        // `results` はクエリの実行結果（検索されたユーザーの配列）
        db.query(query, [username], (err, results) => {
            // エラーが発生した場合、コールバックにエラーを渡し、`null` を返す
            if (err) return callback(err, null);

            // 検索結果が1件以上の場合、`results[0]`（最初のユーザーオブジェクト）をコールバックに渡す
            if (results.length > 0) return callback(null, results[0]);

            // ユーザーが見つからなかった場合、`null` をコールバックに渡す
            return callback(null, null);
        });
    },

    getUserProfile: (user_id, callback) => {
        const query = 'SELECT username, email, password FROM users WHERE id = ?';
        db.query(query, [user_id], (err, result) => {
            if (err) {
                console.error('Error fetching user profile:', err);
                return callback(err, null); // エラー発生時にコールバックを呼ぶ
            }
            if (result.length === 0) {
                return callback(null, null); // ユーザーが見つからなかった場合
            }

            return callback(null, result[0]);
        });
    },
    updateProfile: (userId, data, callback) => {
        const { username, email, password } = data;
        let query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
    
        // パスワードが提供されていれば、更新する
        if (password) {
          query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
          db.query(query, [username, email, password, userId], callback);
        } else {
          db.query(query, [username, email, userId], callback);
        }
      }
}
module.exports = User;