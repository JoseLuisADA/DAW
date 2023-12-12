import logger from '../utils/logger.js';
export function errorMiddleware(err, req, res, next){
    logger.error(err);
    const { status = 500, message } = err;
    const msg = status >= 500 ? 'Error' : message;
    const errorResponse = {
        status, message: msg
    }
    res.status(status).send(errorResponse);
}
