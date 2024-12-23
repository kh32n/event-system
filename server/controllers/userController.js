// eventController.js
const Event = require("../models/userModel")

exports.getProfile = (req, res) => {
    const user_id = req.body.user_id

    Event.getUserProfile(user_id, (err, event) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント詳細の取得中にエラーが発生しました。' });
        }
        if (!event) {
            return res.status(404).json({ error: '指定されたイベントは存在しません。' });
        }
        res.status(200).json(event);  // 取得したイベント詳細を返す
    });
};
