import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.use(auth);
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
