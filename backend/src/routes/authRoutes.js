import express from 'express';
import { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, verifyEmail, googleLogin, refreshToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/verify-email/:token', verifyEmail);
router.post('/google', googleLogin);
router.post('/refresh-token', refreshToken);

export default router;
