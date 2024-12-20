const eventController = require("../controllers/eventController")
const express = require('express');

const router = express.Router();
router.post('/create', eventController.createEvent)
router.get('/list', eventController.getEvent)
module.exports = router;