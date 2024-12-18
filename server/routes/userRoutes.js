
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();


router.post('/create/users', userController.createUser);
router.post('/login/user',userController.loginUser)

module.exports = router;