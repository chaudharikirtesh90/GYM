import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import { getAdminOverview, getUsersAdmin, getMembershipsAdmin, createCoupon, getAnalytics } from '../controllers/adminController.js';

const router = express.Router();

router.use(protect, authorize('admin'));
router.get('/overview', getAdminOverview);
router.get('/users', getUsersAdmin);
router.get('/memberships', getMembershipsAdmin);
router.post('/coupons', createCoupon);
router.get('/analytics', getAnalytics);

export default router;
