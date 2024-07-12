import { Router } from 'express';
import { createMeeting, deleteMeeting, updateMeeting,getAllMeetings ,getMeeting} from "../controllers/meetings.controllers";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Meetings
 *     description: Meetings management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Meeting:
 *       type: object
 *       required:
 *         - serviceId
 *         - businessId
 *         - startTime
 *         - duration
 *         - meeting
 *       properties:
 *         serviceId:
 *           type: string
 *           example: '1250'
 *         businessId:
 *           type: string
 *           example: '123'
 *         startTime:
 *           type: number
 *           example: 1
 *         duration:
 *           type: number
 *           example: 35
 *         meeting:
 *           type: object
 *           example: {}
 */

/**
 * @swagger
 * /api/meeting:
 *   get:
 *     summary: Get all meetings
 *     tags: [Meetings]
 *     description: Retrieve a list of all meetings
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of meetings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meeting'
 *       401:
 *         description: Unauthorized - JWT token is missing or invalid
 *       500:
 *         description: Internal Server Error
 */
router.get('/', authMiddleware, getAllMeetings);

/**
 * @swagger
 * /api/meeting:
 *   post:
 *     summary: Create a new meeting
 *     tags: [Meetings]
 *     description: Create a new meeting
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       201:
 *         description: Meeting created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createMeeting);

/**
 * @swagger
 * /api/meeting/{id}:
 *   put:
 *     summary: Update an existing meeting
 *     tags: [Meetings]
 *     description: Update an existing meeting
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       200:
 *         description: Meeting updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', authMiddleware, updateMeeting);

/**
 * @swagger
 * /api/meeting/{id}:
 *   delete:
 *     summary: Delete a meeting
 *     tags: [Meetings]
 *     description: Delete a meeting by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       200:
 *         description: Meeting deleted successfully
 *       400:
 *         description: Bad request
 */
router.delete('/:id', deleteMeeting);

export default router;
