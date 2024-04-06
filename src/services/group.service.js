import express from 'express';
import { getGroups, createGroup, updateGroup, deleteGroup } from '../controllers/groups.controller.js';  // Asegúrate de que la ruta aquí sea correcta

const router = express.Router();

router.get('/groups', getGroups);
router.post('/groups', createGroup);
router.put('/groups/:id', updateGroup);
router.delete('/groups/:id', deleteGroup);

export default router;