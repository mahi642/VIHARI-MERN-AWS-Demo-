const express = require('express');
const router = express.Router();
const fileUpload = require('../middleware/fileUpload');
const agentController = require('../controllers/agent');

/**
 * @swagger
 * tags:
 *   name: Agent
 *   description: API endpoints for agent actions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Bus:
 *       type: object
 *       properties:
 *         srcname:
 *           type: string
 *         destname:
 *           type: string
 *         trname:
 *           type: string
 *         deptime:
 *           type: string
 *         arrtime:
 *           type: string
 *         durtime:
 *           type: string
 *         tktprice:
 *           type: number
 *         btype:
 *           type: string
 *         Imageurl:
 *           type: string
 *         agent:
 *           type: string
 *       required:
 *         - srcname
 *         - destname
 *         - trname
 *         - deptime
 *         - arrtime
 *         - durtime
 *         - tktprice
 *         - btype
 *         - Imageurl
 *         - agent
 *     Tour:
 *       type: object
 *       properties:
 *         tname:
 *           type: string
 *         tprice:
 *           type: number
 *         DispImageurl:
 *           type: string
 *         agentId:
 *           type: string
 *         places:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - placeId1
 *             - placeId2
 *       required:
 *         - tname
 *         - tprice
 *         - DispImageurl
 *         - agentId
 *         - places
 *     Place:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         Imageurl:
 *           type: string
 *         description:
 *           type: string
 *         tour:
 *           type: string
 *       required:
 *         - name
 *         - Imageurl
 *         - description
 *         - tour
 */

/**
 * @swagger
 * /api/agent/addbus:
 *   post:
 *     summary: Add a new bus
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Bus'
 *     responses:
 *       201:
 *         description: Bus added successfully
 *       500:
 *         description: Internal server error
 */

router.post('/addbus', fileUpload.single('image'), agentController.addBus);

/**
 * @swagger
 * /api/agent/allbuses:
 *   get:
 *     summary: Get all buses
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: List of all buses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bus'
 *       500:
 *         description: Internal server error
 */

router.get('/allbuses', agentController.getBuses);

/**
 * @swagger
 * /api/agent/deletebus/{busId}:
 *   delete:
 *     summary: Delete a bus by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: busId
 *         required: true
 *         description: ID of the bus to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bus deleted successfully
 *       404:
 *         description: Bus not found
 *       500:
 *         description: Internal server error
 */

router.delete('/deletebus/:busId', agentController.deleteBus);

/**
 * @swagger
 * /api/agent/getbus/{busId}:
 *   get:
 *     summary: Get bus details by ID
 *     tags: [Agent]
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bus'
 *       500:
 *         description: Internal server error
 */

router.get('/getbus/:busId', agentController.getBusDetails);

/**
 * @swagger
 * /api/agent/editbus/{busId}:
 *   put:
 *     summary: Edit a bus by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: busId
 *         required: true
 *         description: ID of the bus to edit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bus'
 *     responses:
 *       200:
 *         description: Bus edited successfully
 *       404:
 *         description: Bus not found
 *       500:
 *         description: Internal server error
 */

router.put('/editbus/:busId', agentController.editBus);

/**
 * @swagger
 * /api/agent/agentbuses/{agentId}:
 *   get:
 *     summary: Get all buses of an agent by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to get buses
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of all buses of the agent
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bus'
 *       500:
 *         description: Internal server error
 */

router.get('/agentbuses/:agentId', agentController.getAgentBuses);

/**
 * @swagger
 * /api/agent/agentProfile/{agentId}:
 *   get:
 *     summary: Get agent profile by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to get profile
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agent profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agent'
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.get('/agentProfile/:agentId', agentController.getAgentProfile);

/**
 * @swagger
 * /api/agent/editProfile/{agentId}:
 *   put:
 *     summary: Edit agent profile by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to edit profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Agent'
 *     responses:
 *       200:
 *         description: Agent profile edited successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.put('/editProfile/:agentId', agentController.agentEditProfile);

/**
 * @swagger
 * /api/agent/addtour:
 *   post:
 *     summary: Add a new tour
 *     tags: [Agent]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Tour'
 *     responses:
 *       201:
 *         description: Tour added successfully
 *       500:
 *         description: Internal server error
 */

router.post('/addtour', fileUpload.single('tourImage'), agentController.addTour);

/**
 * @swagger
 * /api/agent/alltours:
 *   get:
 *     summary: Get all tours
 *     tags: [Agent]
 *     responses:
 *       200:
 *         description: List of all tours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tour'
 *       500:
 *         description: Internal server error
 */

router.get('/alltours', agentController.getTours);

/**
 * @swagger
 * /api/agent/deletetour/{tourId}:
 *   delete:
 *     summary: Delete a tour by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tour deleted successfully
 *       404:
 *         description: Tour not found
 *       500:
 *         description: Internal server error
 */

router.delete('/deletetour/:tourId', agentController.deleteTour);

/**
 * @swagger
 * /api/agent/gettour/{tourId}:
 *   get:
 *     summary: Get tour details by ID
 *     tags: [Agent]
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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 *       404:
 *         description: Tour not found
 *       500:
 *         description: Internal server error
 */

router.get('/gettour/:tourId', agentController.getTourDetails);

/**
 * @swagger
 * /api/agent/edittour/{tourId}:
 *   put:
 *     summary: Edit tour details by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to edit details
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tour'
 *     responses:
 *       200:
 *         description: Tour details edited successfully
 *       404:
 *         description: Tour not found
 *       500:
 *         description: Internal server error
 */

router.put('/edittour/:tourId', agentController.editTour);

/**
 * @swagger
 * /api/agent/agenttours/{agentId}:
 *   get:
 *     summary: Get all tours of an agent by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to get tours
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of all tours of the agent
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tour'
 *       500:
 *         description: Internal server error
 */

router.get('/agenttours/:agentId', agentController.getAgentTours);

/**
 * @swagger
 * /api/agent/addplace/{tourId}:
 *   post:
 *     summary: Add a new place to a tour
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to add place
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Place'
 *     responses:
 *       201:
 *         description: Place added successfully
 *       500:
 *         description: Internal server error
 */

router.post('/addplace/:tourId', fileUpload.single('placeImage'), agentController.addPlace);

/**
 * @swagger
 * /api/agent/tourplaces/{tourId}:
 *   get:
 *     summary: Get all places of a tour by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to get places
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of all places of the tour
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Place'
 *       500:
 *         description: Internal server error
 */

router.get('/tourplaces/:tourId', agentController.getPlaces);

/**
 * @swagger
 * /api/agent/deleteplace/{placeId}:
 *   delete:
 *     summary: Delete a place by ID
 *     tags: [Agent]
 *     parameters:
 *       - in: path
 *         name: placeId
 *         required: true
 *         description: ID of the place to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Place deleted successfully
 *       404:
 *         description: Place not found
 *       500:
 *         description: Internal server error
 */

router.delete('/deleteplace/:placeId', agentController.deletePlace);

module.exports = router;