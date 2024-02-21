const express = require('express');
const router = express.Router();
const busController = require('../controllers/bus')
const fetchUser = require('../middleware/fetchUser')
router.post('/buslist',busController.busList);
router.post('/booking',fetchUser,busController.booking)
module.exports = router;