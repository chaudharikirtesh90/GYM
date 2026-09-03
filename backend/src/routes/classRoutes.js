import express from 'express';
import { protect } from '../middleware/auth.js';
import { getClasses, getClassById, createClass, updateClass, deleteClass } from '../controllers/classController.js';

const router = express.Router();

router.get('/', getClasses);
router.get('/:id', getClassById);
router.use(protect);
router.post('/', createClass);
router.put('/:id', updateClass);
router.delete('/:id', deleteClass);

export default router;
