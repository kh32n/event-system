const eventController = require("../controllers/eventController")
const express = require('express');

const router = express.Router();
router.post('/create', eventController.createEvent)

module.exports = router;