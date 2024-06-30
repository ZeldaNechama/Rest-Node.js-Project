import { Router } from 'express';
import { createUser } from "../controllers/users.controllers";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User management
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Sign up a new user
 *     tags: [User]
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User signed up successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createUser);

export default router;
