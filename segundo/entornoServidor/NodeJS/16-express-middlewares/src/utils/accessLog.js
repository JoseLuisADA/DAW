import morgan from 'morgan';
import logger from './logger.js';

const morganMiddleware = morgan((tokens, req, res) => {
  const status = tokens.status(req, res);
  let level = 'info';

  if (status.startsWith('2')) {
    level = 'info';
  } else if (status.startsWith('4')) {
    level = 'warn';
  } else if (status.startsWith('5')) {
    level = 'error';
  } else {
    level = 'umknow status code';
  }

  const message = `${tokens.method(req, res)} ${tokens.url(req, res)} ${status} ${tokens['response-time'](req, res)}ms`;

  logger[level](message);
});

export default morganMiddleware;
