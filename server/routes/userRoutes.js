const userController = require("../controllers/userController.js");
const express = require('express');

const router = express.Router();

router.post('/get', userController.getProfile);


module.exports = router;