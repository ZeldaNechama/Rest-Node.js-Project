import { Router } from 'express';
import { createMeeting, deleteMeeting, updateMeeting } from "../controllers/meetings.controllers";
import authMiddleware from "../middlewares/auth.middleware"

const router = Router();

// /**
//  * @swagger
//  * /meetings:
//  *   post:
//  *     summary: Create a new meeting
//  *     tags:
//  *        -Meeting
//  *     description: Create a new meeting entity
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Meeting'
//  *     responses:
//  *       201:
//  *         description: Created successfully
//  *       400:
//  *         description: Bad request
//  */
router.post('/',createMeeting);

// /**
//  * @swagger
//  * /meetings/{id}:
//  *   put:
//  *     summary: Update a meeting
//  *     description: Update an existing meeting entity
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the meeting to update
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Meeting'
//  *     responses:
//  *       200:
//  *         description: Updated successfully
//  *       404:
//  *         description: Meeting not found
//  */
router.put('/:id',authMiddleware ,updateMeeting);

// /**
//  * @swagger
//  * /meetings/{id}:
//  *   delete:
//  *     summary: Delete a meeting
//  *     description: Delete an existing meeting entity
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the meeting to delete
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Deleted successfully
//  *       404:
//  *         description: Meeting not found
//  */
router.delete('/:id', deleteMeeting);

export default router;
