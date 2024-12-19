const db = require("../config/dbConfig.js")


const Event = {
    createEvent: (data, callback) => {
        const query = `INSERT INTO event (eventname, date, locate,detail) VALUES (?, ?, ?,?)`;

        db.query(query, [data.eventname, data.date, data.locate, data.detail], callback);

    }

}

module.exports = Event;