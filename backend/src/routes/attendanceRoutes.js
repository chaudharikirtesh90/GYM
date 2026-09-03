import express from 'express';
import { protect } from '../middleware/auth.js';
import { getAttendance, createAttendance, updateAttendance, deleteAttendance } from '../controllers/attendanceController.js';

const router = express.Router();

router.use(protect);
router.get('/', getAttendance);
router.post('/', createAttendance);
router.put('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);

export default router;
