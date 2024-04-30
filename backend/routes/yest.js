const express = require('express');
const { getUserTripsByBusId, getUserDetailsById } = require('../controllers/GetUserBookings');
const { getUserToursByTourId } = require('../controllers/GetUserTours');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for user operations
 */

/**
 * @swagger
 * /api/user/{busId}/alldetails:
 *   get:
 *     summary: Get all details for a specific bus by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: busId
 *         required: true
 *         description: ID of the bus to get details
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bus details retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.get('/:busId/alldetails', getUserTripsByBusId);

/**
 * @swagger
 * /api/user/{userId}/userdetails:
 *   get:
 *     summary: Get user details by user ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to get details
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.get('/:userId/userdetails', getUserDetailsById);

/**
 * @swagger
 * /api/user/{tourId}/alldetails:
 *   get:
 *     summary: Get all details for a specific tour by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to get details
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tour details retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.get('/:tourId/alldetails', getUserToursByTourId);

module.exports = router;
