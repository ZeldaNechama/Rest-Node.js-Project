// import { Router } from 'express';
// import { createService, updateService, deleteSercice } from "../controllers/services.controllers";
// import authMiddleware from "../middlewares/auth.middleware"

// const router = Router();

// router.post('/', authMiddleware,createService);

// router.put('/:id', updateService);

// router.delete('/:id', deleteSercice);

// export default router;
import { Router } from 'express';
import { createService, updateService, deleteSercice,getAllServices} from "../controllers/services.controllers";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: API endpoints for managing services
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - businessId
 *         - serviceId
 *         - serviceData
 *       properties:
 *         businessId:
 *           type: string
 *           example: 'xxxx'
 *         serviceId:
 *           type: string
 *           example: 'xxxx'
 *         serviceData:
 *           type: object
 *           example: {}
 */
/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     description: Retrieve a list of all services
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *       401:
 *         description: Unauthorized - JWT token is missing or invalid
 *       500:
 *         description: Internal Server Error
 */
router.get('/', authMiddleware, getAllServices);

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     description: Create a new service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized, JWT token is missing or invalid
 */
router.post('/', authMiddleware, createService);

/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags: [Services]
 *     description: Update a service by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized, JWT token is missing or invalid
 *       404:
 *         description: Service not found
 */
router.put('/:id', authMiddleware, updateService);

/**
 * @swagger
 * /api/service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags: [Services]
 *     description: Delete a service by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized, JWT token is missing or invalid
 *       404:
 *         description: Service not found
 */
router.delete('/:id', authMiddleware, deleteSercice);

export default router;
