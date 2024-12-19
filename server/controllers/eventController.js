const Event = require("../models/eventModel")

exports.createEvent = (req, res) => {
    const { eventname, date, locate, detail } = req.body;
    Event.createEvent({ username, email, password: hashedPassword }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ message: 'Event created successfully!' });
    })
}