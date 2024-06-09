 import { Router } from 'express';
 import {updateBusinees,createBusiness} from "../controllers/business.controllers"

const router = Router();

router.post('/',createBusiness);
router.put('/:id',updateBusinees)

export default router;