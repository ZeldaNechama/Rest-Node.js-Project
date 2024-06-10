import { Router } from 'express';
import { updateBusinees, createBusiness } from "../controllers/business.controllers";

const router = Router();


/**
 * @swagger
 * /api/business:
 *   post:
 *     summary: Create a new business
 *     tags:[Business]
 *     description: Create a new business entity
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createBusiness);

/**
 * @swagger
 * /api/business/{id}:
 *   put:
 *     summary: Update a business
 *     description: Update an existing business entity
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the business to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Business not found
 */
router.put('/:id', updateBusinees);

export default router;
