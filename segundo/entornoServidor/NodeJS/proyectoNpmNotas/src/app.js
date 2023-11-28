import express from 'express';
import notesRouter from './routes/notesRoutes.js';
import logger from './utils/logger.js';

const app = express();
app.use(express.json());

app.use('/api', notesRouter);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
