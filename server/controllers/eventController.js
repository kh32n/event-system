const Event = require("../models/eventModel")

exports.createEvent = (req, res) => {
    const { name, date, location, description ,userID} = req.body;
    console.log(userID)
    Event.createEvent({ name, date, location,description ,userID}, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ message: 'Event created successfully!' });
    })
}