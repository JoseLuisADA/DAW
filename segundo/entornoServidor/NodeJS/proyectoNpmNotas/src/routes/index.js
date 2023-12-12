import express from 'express';
import notasRouter from './notasRutas.js';
import authRoutes from './authRutas.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/notes', notasRouter);

export default router;
