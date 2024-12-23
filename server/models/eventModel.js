const db = require("../config/dbConfig.js");
const { joinEvent } = require("../controllers/eventController.js");


const Event = {
    createEvent: (data, callback) => {
        const query = `INSERT INTO events (name, date, location,description,user_id) VALUES (?, ?, ?,?,?)`;

        db.query(query, [data.name, data.date, data.location, data.description,data.userID], callback);

    },

    getEvents: (callback) => {
        const query = 'SELECT * FROM events ORDER BY created_at DESC'; // 最新のイベント順に取得
        db.query(query, callback);
    },

    getEventById: (id, callback) => {
        const query = `SELECT * FROM events WHERE id = ?`;
        db.query(query, [id], callback);

    },

    joinEvent: (data, callback) => {
        // SQLクエリの実行
        const query = 'INSERT INTO event_registrations (user_id, event_id) VALUES (?, ?)';
        db.query(query, [data.user_id, data.event_id], (err, result) => {
            if (err) {
                console.error('Error during event registration:', err);
                // エラー発生時にコールバックを呼ぶ
                return callback(err, null);
            }
            // 成功時にコールバックを呼ぶ
            callback(null, result);
        });
    },
    deleteEvent: (data, callback) => {
        // SQLクエリの実行
        const query = 'DELETE FROM event_registrations WHERE user_id = ? AND event_id = ?';
        db.query(query, [data.user_id, data.event_id], (err, result) => {
            if (err) {
                console.error('Error during event registration:', err);
                // エラー発生時にコールバックを呼ぶ
                return callback(err, null);
            }
            // 成功時にコールバックを呼ぶ
            callback(null, result);
        });
    },
    getUserEvents: (data, callback) => {
        const query = `
            SELECT events.id, events.name, events.date, events.location, events.description
            FROM events
            JOIN event_registrations ON events.id = event_registrations.event_id
            WHERE event_registrations.user_id = ?
        `;
        db.query(query, [data.user_id], (err, result) => {
            if (err) {
                console.error('イベント一覧の取得中にエラー:', err);
                return callback(err, null);  // エラー時にコールバックでエラーを返す
            }
    
    
            // 正常に取得できた場合、イベントリストをコールバックに渡す
            callback(null, result);
        });
}
}
module.exports = Event;