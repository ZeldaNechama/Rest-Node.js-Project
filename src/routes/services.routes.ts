import { Router } from 'express';
import { createService, updateService, deleteSercice } from "../controllers/services.controllers";
import authMiddleware from "../middlewares/auth.middleware"

const router = Router();

// /**
//  * @swagger
//  * /services:
//  *   post:
//  *     summary: Create a new service
//  *     description: Create a new service entity
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Service'
//  *     responses:
//  *       201:
//  *         description: Created successfully
//  *       400:
//  *         description: Bad request
//  */
router.post('/', authMiddleware,createService);

// /**
//  * @swagger
//  * /services/{id}:
//  *   put:
//  *     summary: Update a service
//  *     description: Update an existing service entity
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the service to update
//  *         schema:
//  *           type: string
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Service'
//  *     responses:
//  *       200:
//  *         description: Updated successfully
//  *       404:
//  *         description: Service not found
//  */
router.put('/:id', updateService);

// /**
//  * @swagger
//  * /services/{id}:
//  *   delete:
//  *     summary: Delete a service
//  *     tags:
//  *        -Service
//  *     description: Delete an existing service entity
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         description: ID of the service to delete
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Deleted successfully
//  *       404:
//  *         description: Service not found
//  */
router.delete('/:id', deleteSercice);

export default router;
