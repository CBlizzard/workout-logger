const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.post('/login', controller.logInUser)
router.post('/signup', controller.signUpUser)


module.exports = router;