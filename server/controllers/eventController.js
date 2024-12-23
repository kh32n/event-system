const Event = require("../models/eventModel")

//イベント作成
exports.createEvent = (req, res) => {
    const { name, date, location, description ,userID} = req.body;
    Event.createEvent({ name, date, location,description ,userID}, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ message: 'Event created successfully!' });
    })
}
//イベント情報取得
exports.getEvent = (req, res) => {

    Event.getEvents((err, events) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント一覧の取得中にエラーが発生しました。' });
        }
        res.status(200).json(events);
    });
};
//イベント詳細取得
exports.getEventDetails = (req, res) => {
    const { id } = req.params; // :id からパラメータを取得
    // console.log('Event ID:', id); // ID をコンソールで確認

    if (!id) {
        return res.status(400).json({ error: 'IDパラメータが不足しています。' });
    }

    Event.getEventById(id, (err, event) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント詳細の取得中にエラーが発生しました。' });
        }
        if (!event) {
            return res.status(404).json({ error: '指定されたイベントは存在しません。' });
        }
        // console.log(event)
        res.status(200).json(event);  // イベント詳細を返す
    });
};

//イベント参加処理
exports.joinEvent = (req, res) => {
    const { id } = req.params; // :id からパラメータを取得
    // console.log('Event ID:', id); // ID をコンソールで確認
    const user_id = req.body.userID

    if (!id) {
        return res.status(400).json({ error: 'IDパラメータが不足しています。' });
    }

    Event.joinEvent({ user_id: user_id, event_id: id }, (err, event) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント詳細の取得中にエラーが発生しました。' });
        }
        res.status(200).json({ message: 'Event join done' });
    });
}

//イベント参加取り消し処理
exports.cancelEvent = (req, res) => {
    const { id } = req.params; // :id からパラメータを取得
    // console.log('Event ID:', id); // ID をコンソールで確認
    const user_id = req.body.userID
    Event.deleteEvent({ user_id: user_id, event_id: id }, (err, event) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント詳細の取得中にエラーが発生しました。' });
        }
        res.status(200).json({ message: 'Event join done' });
    });
};
//ユーザーが参加予定のイベント取得
exports.getUserEvent = (req, res) => {
    const user_id = req.body.user_id

    Event.getUserEvents({user_id},(err, events) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント一覧の取得中にエラーが発生しました。' });
        }
        res.status(200).json(events);
    });
};

//ユーザーが参加予定のイベントを取り消し
exports.deleEvent = (req, res) => {
    const {user_id,event_id} = req.body
    // console.log('Event ID:', event_id); // ID をコンソールで確認
    Event.deleteEvent({ user_id: user_id, event_id: event_id }, (err, event) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント詳細の取得中にエラーが発生しました。' });
        }
        res.status(200).json({ message: 'Event join done' });
    });
};