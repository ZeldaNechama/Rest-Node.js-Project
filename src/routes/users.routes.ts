import { Router } from 'express';
import { createUser } from "../controllers/users.controllers";

const router = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user entity
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createUser);

export default router;
