const Event = require("../models/eventModel")

exports.createEvent = (req, res) => {
    const { name, date, location, description } = req.body;
    console.log(name)
    Event.createEvent({ name, date, location,description }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ message: 'Event created successfully!' });
    })
}