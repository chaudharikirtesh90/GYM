import express from 'express';
import { protect } from '../middleware/auth.js';
import { getMemberships, getMembershipById, createMembership, updateMembership, deleteMembership } from '../controllers/membershipController.js';

const router = express.Router();

router.get('/', getMemberships);
router.get('/:id', getMembershipById);
router.use(protect);
router.post('/', createMembership);
router.put('/:id', updateMembership);
router.delete('/:id', deleteMembership);

export default router;
