// authRoutes.js
import express from 'express';
import { login } from '../controllers/auth-controlador.js';

const router = express.Router();

router.post('/', login);

export default router;