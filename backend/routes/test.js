
const express = require('express');
const { getUserTripsByBusId, getUserDetailsById } = require('../controllers/GetUserBookings');
const router = express.Router()

router.get('/:busId/alldetails',getUserTripsByBusId)
router.get('/:userId/userdetails',getUserDetailsById)

module.exports=router;


