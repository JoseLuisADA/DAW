import express from 'express';
import * as controladorNotas from '../controllers/notas-controlador.js';
import { authenticateToken } from '../middlewares/auth-middleware.js';


const router = express.Router();

router.get('/', authenticateToken, controladorNotas.listarNotas);
router.get('/:nombreArchivo', controladorNotas.leerNota);
router.post('/', controladorNotas.crearNota);
router.put('/', controladorNotas.actualizarNota);
router.delete('/:nombreArchivo', controladorNotas.borrarNota);

export default router;
