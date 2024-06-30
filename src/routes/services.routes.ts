import { Router } from 'express';
import { createService, updateService, deleteSercice } from "../controllers/services.controllers";
import authMiddleware from "../middlewares/auth.middleware"

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Services
 *     description: Services management
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     tags: [Services]
 *     summary: Create a new service
 *     description: Create a new service entity
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/services'
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', authMiddleware,createService);
/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service
 *     tags: [Services]
 *     description: Update an existing service entity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Services'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Service not found
 */
  
router.put('/:id', updateService);
/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Services]
 *     description: Delete an existing service entity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Service not found
 */

router.delete('/:id', deleteSercice);

export default router;
