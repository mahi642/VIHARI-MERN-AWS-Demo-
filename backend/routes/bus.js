const express = require('express');
const router = express.Router();
const busController = require('../controllers/bus')

router.post('/buslist',busController.busList);

module.exports = router;