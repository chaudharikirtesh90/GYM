import express from 'express';
import { protect } from '../middleware/auth.js';
import { getPlans, createPlan, updatePlan, deletePlan } from '../controllers/planController.js';

const router = express.Router();

router.use(protect);
router.get('/', getPlans);
router.post('/', createPlan);
router.put('/:id', updatePlan);
router.delete('/:id', deletePlan);

export default router;
