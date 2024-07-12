import { Router } from 'express';
import { createUser } from "../controllers/users.controllers";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *         - email
 *         - userId
 *       properties:
 *         userName:
 *           type: string
 *           example: 'example_user'
 *         password:
 *           type: string
 *           example: 'password123'
 *         email:
 *           type: string
 *           example: 'user@example.com'
 *         userId:
 *           type: string
 *           example: '123456789'
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal Server Error
 */
router.post('/', createUser);

export default router;
