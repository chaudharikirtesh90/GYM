import express from 'express';
import { protect } from '../middleware/auth.js';
import { getProfile, updateProfile, getUsers, deleteUser, getDashboardStats } from '../controllers/userController.js';

const router = express.Router();

router.use(protect);
router.get('/me', getProfile);
router.put('/me', updateProfile);
router.get('/', getUsers);
router.get('/stats', getDashboardStats);
router.delete('/:id', deleteUser);

export default router;
