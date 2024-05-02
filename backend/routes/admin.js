const express = require('express');
const router = express.Router();
// const fileUpload = require('../middleware/fileUpload');
const adminController = require('../controllers/admin');

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API endpoints for admin actions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 *         mobile:
 *           type: string
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - mobile
 *     Agent:
 *       type: object
 *       properties:
 *         agentName:
 *           type: string
 *         document:
 *           type: string
 *         password:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         buses:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - busId1
 *             - busId2
 *         tours:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - tourId1
 *             - tourId2
 *         flag:
 *           type: integer
 *         blocked:
 *           type: boolean
 *       required:
 *         - agentName
 *         - document
 *         - password
 *         - email
 *         - buses
 *         - tours
 */

router.post('/announcements',adminController.postsendmail);

/**
 * @swagger
 * /api/admin/allusers:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */

router.get('/allusers', adminController.getAllUsers);

/**
 * @swagger
 * /api/admin/allagents:
 *   get:
 *     summary: Get all agents
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of all agents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agent'
 *       500:
 *         description: Internal server error
 */

router.get('/allagents', adminController.getAllAgents);

/**
 * @swagger
 * /api/admin/adduser:
 *   post:
 *     summary: Add a new user
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User added successfully
 *       400:
 *         description: User already exists
 *       500:
 *         description: Internal server error
 */

router.post('/adduser', adminController.addUser);

/**
 * @swagger
 * /api/admin/deleteuser/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.delete('/deleteuser/:userId', adminController.deleteUser);

/**
 * @swagger
 * /api/admin/acceptagent/{agentId}:
 *   put:
 *     summary: Accept an agent by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to accept
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agent accepted successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.put('/acceptagent/:agentId', adminController.acceptAgent);

/**
 * @swagger
 * /api/admin/rejectagent/{agentId}:
 *   delete:
 *     summary: Reject an agent by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to reject
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agent rejected successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.delete('/rejectagent/:agentId', adminController.rejectAgent);

/**
 * @swagger
 * /api/admin/blockagent/{agentId}:
 *   put:
 *     summary: Block an agent by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to block
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agent blocked successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.put('/blockagent/:agentId', adminController.blockAgent);

/**
 * @swagger
 * /api/admin/unblockagent/{agentId}:
 *   put:
 *     summary: Unblock an agent by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: agentId
 *         required: true
 *         description: ID of the agent to unblock
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agent unblocked successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal server error
 */

router.put('/unblockagent/:agentId', adminController.unblockAgent);

/**
 * @swagger
 * /api/admin/editProfile/{userId}:
 *   put:
 *     summary: Edit user profile by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to edit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User profile edited successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

router.put('/editProfile/:userId',adminController.userEditProfile);

module.exports = router;
