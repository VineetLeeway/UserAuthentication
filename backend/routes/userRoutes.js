const express = require('express');
const {registerUser, authUser} = require('../controller/userController');
const jwtVeify = require('../middleware/auth');

const router = express.Router();

router.route('/').post(registerUser)
router.route('/login',jwtVeify).post(authUser)


module.exports = router; 