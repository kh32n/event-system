  const db = require('./config/dbConfig')
  // `express` フレームワークをインポート
  // Express は、Node.js のためのシンプルで強力なウェブアプリケーションフレームワーク
  const express = require('express');

  // `cors` パッケージをインポート
  // CORS（Cross-Origin Resource Sharing）を有効にし、異なるオリジン間のリクエストを許可する
  const cors = require('cors');

  // ユーザールートのモジュールをインポート
  // `./routes/userRoutes` にはユーザー関連の API エンドポイントが定義されている
  const authRoutes = require("./routes/authRoutes");
  const eventRoutes = require("./routes/eventRoutes")
  // `express` アプリケーションを作成
  // `app` オブジェクトはサーバーの設定とエンドポイントの定義を管理する
  const app = express();

  // 使用するポートを設定
  // 環境変数 `process.env.PORT` が設定されていない場合、デフォルトでポート 3000 を使用する
  const PORT = process.env.PORT || 3001;

  // `cors` ミドルウェアをアプリケーションで使用
  // これにより、異なるオリジン（ドメイン、ポート）からのリクエストを許可し、API を外部から使用できるようにする
  app.use(cors());

  // `express.json()` ミドルウェアを使用して、リクエストボディを JSON 形式でパースする
  // クライアントから送られてくるデータを JSON として扱うため、`req.body` にアクセスできるようになる
  app.use(express.json());

  // ルートを設定
  app.use('/api/user', authRoutes);
  app.use('/api/event', eventRoutes);
  // サーバーのルートエンドポイントを定義
  // `GET /` リクエストに対して、シンプルなメッセージをレスポンスとして返す
  app.get('/', (req, res) => {
    // クライアントに「Server is running」のメッセージを返す
    res.send('Server is running');
  });

  // サーバーを指定したポートで起動する
  // `app.listen` は、指定されたポートでサーバーを開始し、クライアントからのリクエストを待ち受ける
  app.listen(PORT, () => {
    // サーバー起動時に、どのポートでサーバーが動作しているかをコンソールに出力
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  db.connect()