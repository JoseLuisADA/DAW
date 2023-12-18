import express from 'express';
import * as controladorNotas from '../controllers/notas-controlador.js';


const router = express.Router();

router.get('/', controladorNotas.listarNotas);
router.get('/:nombreArchivo', controladorNotas.leerNota);
router.post('/', controladorNotas.crearNota);
router.patch('/:nombreArchivo', controladorNotas.actualizarNota);
router.delete('/:nombreArchivo', controladorNotas.borrarNota);

export default router;
