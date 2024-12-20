const Event = require("../models/eventModel")

exports.createEvent = (req, res) => {
    const { name, date, location, description ,userID} = req.body;
    Event.createEvent({ name, date, location,description ,userID}, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ message: 'Event created successfully!' });
    })
    
}

exports.getEvent = (req, res) => {

    Event.getEvents((err, events) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'イベント一覧の取得中にエラーが発生しました。' });
        }
        res.status(200).json(events);
    });
};