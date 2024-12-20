const eventController = require("../controllers/eventController");
const express = require('express');

const router = express.Router();

// イベント作成
router.post('/create', eventController.createEvent);

// イベント一覧取得
router.get('/list', eventController.getEvent);

// イベント詳細取得 (idパラメータを使う)
router.get('/detail/:id', eventController.getEventDetails);

module.exports = router;
