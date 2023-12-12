export function errorMiddleware(err, req, res, next){
    const { status, message } = err;
    const msg = status >= 500 ? 'Error' : message;
    const errorResponse = {
        status, message: msg
    }
    res.status(status).send(errorResponse);
}
