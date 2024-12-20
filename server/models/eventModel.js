const db = require("../config/dbConfig.js")


const Event = {
    createEvent: (data, callback) => {
        const query = `INSERT INTO events (name, date, location,description) VALUES (?, ?, ?,?)`;

        db.query(query, [data.name, data.date, data.location, data.description], callback);

    }

}

module.exports = Event;