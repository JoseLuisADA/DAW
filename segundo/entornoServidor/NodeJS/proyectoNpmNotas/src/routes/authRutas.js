import express from 'express';
import controladorAuth from '../controllers/auth-controlador.js';

const router = express.Router();

router.post('/', controladorAuth);

export default router;