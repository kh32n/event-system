const db = require("../config/dbConfig.js")


const Event = {
    createEvent: (data, callback) => {
        const query = `INSERT INTO events (name, date, location,description,user_id) VALUES (?, ?, ?,?,?)`;

        db.query(query, [data.name, data.date, data.location, data.description,data.userID], callback);

    }

}

module.exports = Event;