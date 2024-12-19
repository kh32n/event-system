const eventController = require("../controllers/eventController")
const express = require('express');

const router = express.Router();
router.post('/event/create', eventController.createEvent)

module.exports = router;