/* eslint-disable linebreak-style */
import http from 'http';
import url from 'url';
import { routes, defaultRoute } from './server/routes.js';

const port = 3000;

const server = http.createServer((request, response) => {
  // Parsea la URL y obtiene el pathname
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname.replace(/^\/+|\/+$/g, ''); // Elimina las barras al principio y al final

  // Aquí obtienes la ruta de `routes` o la `defaultRoute`
  const route = routes[pathname] || defaultRoute;

  // Ejecuta el controlador correspondiente
  route(request, response);
});

server.listen(port, () => {
  console.log(`Server is ready at http://localhost:${port}`);
});
