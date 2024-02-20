const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')
const orderController = require('../controllers/order')
const fetchuser = require('../middleware/fetchUser')
router.post('/login',authController.verifyUser);
router.post('/signup',authController.createUser);
router.post('/order',orderController.createorder)
router.post('/userdetails',fetchuser,authController.getUserDetails)
module.exports = router;