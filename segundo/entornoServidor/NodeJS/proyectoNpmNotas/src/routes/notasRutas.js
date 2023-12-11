import express from 'express';
import controladorNotas from '../controllers/controladorNotas.js';

const router = express.Router();

router.get('/', controladorNotas.listarNotas);
router.get('/:nombreArchivo', controladorNotas.leerArchivo);
router.post('/', controladorNotas.crearNota);
router.put('/', controladorNotas.actualizarNota);
router.delete('/:nombreArchivo', controladorNotas.borrarNotas);

export default router;
