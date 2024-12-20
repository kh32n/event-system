// eventController.js

exports.getEventDetails = (req, res) => {
    const { id } = req.params; // URLパラメータからidを取得
    console.log(id);

    // ここでIDに基づいてイベント詳細をデータベースから取得する
    Event.getEventById(id, (err, event) => {
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
