const db = require("../config/dbConfig.js")


const Event = {
    createEvent: (data, callback) => {
        const query = `INSERT INTO events (name, date, location,description,user_id) VALUES (?, ?, ?,?,?)`;

        db.query(query, [data.name, data.date, data.location, data.description,data.userID], callback);

    },

    getEvents: (callback) => {
        const query = 'SELECT * FROM events ORDER BY created_at DESC'; // 最新のイベント順に取得
        db.query(query, callback);
    }
}

module.exports = Event;