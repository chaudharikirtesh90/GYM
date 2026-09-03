import express from 'express';
import { protect } from '../middleware/auth.js';
import { createPayment, getPayments, refundPayment, createCheckoutSession } from '../controllers/paymentController.js';

const router = express.Router();

router.use(protect);
router.get('/', getPayments);
router.post('/checkout', createCheckoutSession);
router.post('/', createPayment);
router.post('/refund/:id', refundPayment);

export default router;
