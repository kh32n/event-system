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
    }}

module.exports = User;