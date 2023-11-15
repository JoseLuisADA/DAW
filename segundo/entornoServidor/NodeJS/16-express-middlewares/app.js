import express from 'express';
import authMiddleware from './src/middlewares/authMiddleware.js';
import errorMiddleware from './src/middlewares/errorMiddleware.js';
import accessLog from './src/utils/accessLog.js';
import logger from './src/utils/logger.js';

const app = express();

// Morgan para loguear las peticiones HTTP
app.use(accessLog);

// Middleware de autenticación para proteger rutas
app.use(authMiddleware);

// Rutas
app.get('/info', (req, res) => {
  res.status(200).send('Bienvenido, disfrute del contenido');
});

app.get('/warn', (req, res) => {
  res.status(500).send('Bienvenido, disfrute del contenido');
});

app.get('/error', (req, res) => {
  res.status(400).send('Bienvenido, disfrute del contenido');
});

// Middleware de manejo de errores
app.use(errorMiddleware);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.warn('warning');
  logger.error('error');
});

export default app;
