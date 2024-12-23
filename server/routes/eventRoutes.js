const eventController = require("../controllers/eventController");
const express = require('express');

const router = express.Router();

// イベント作成
router.post('/create', eventController.createEvent);

// イベント一覧取得
router.get('/list', eventController.getEvent);

// イベント詳細取得 (idパラメータを使う)
router.get('/detail/:id', eventController.getEventDetails);

//イベント参加登録
router.post('/join/:id', eventController.joinEvent);

//イベント参加取り消し
router.post('/cancel/:id', eventController.cancelEvent);

module.exports = router;
