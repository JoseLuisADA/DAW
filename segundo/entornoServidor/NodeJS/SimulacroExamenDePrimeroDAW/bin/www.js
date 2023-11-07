#!/usr/bin/env node

import debugLib from 'debug';
import http from 'http';
import app from '../app.js'; // Asegúrate de que la ruta es correcta y agrega '.js'

const debug = debugLib('proyecto-juego-de-la-oca:server');

// La función `normalizePort` asegura que el puerto sea un número válido o false si no lo es.
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

const port = normalizePort(process.env.PORT || '3001'); // Asegúrate de que el puerto por defecto es '3000', no '300'
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// La función `onError` maneja los errores al iniciar el servidor.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

// La función `onListening` se dispara cuando el servidor comienza a escuchar en el puerto.
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
