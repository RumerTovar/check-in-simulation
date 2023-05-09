import { Router } from 'express';
import { checkIn } from '../controllers/checkIn.controllers.js';

const router = Router();

router.get('/:id/passengers', checkIn);

export default router;
