import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Auth management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - userName
 *         - password
 *         - email
 *         - userId
 *       properties:
 *         userName:
 *           type: string
 *           example: 'xxxx'
 *         password:
 *           type: string
 *           example: 'string'
 *         email:
 *           type: string
 *           example: 'xxxx@gmail.com'
 *         userId:
 *           type: string
 *           example: 'xxxxx'
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Auth]
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       201:
 *         description: User signed up successfully
 *       400:
 *         description: Bad request
 *       409:
 *         description: Conflict - User with already exists
 */
router.post('/signup', signUp);

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: Sign in an existing user
 *     tags: [Auth]
 *     description: Authenticate an existing user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/signin', signIn);

export default router;

