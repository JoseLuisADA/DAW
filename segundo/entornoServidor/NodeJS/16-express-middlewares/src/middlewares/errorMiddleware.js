import logger from './../utils/logger.js';

export default function errorMiddleware(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send('Server Error');
}
