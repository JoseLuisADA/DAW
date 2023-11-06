/* eslint-disable linebreak-style */
/* eslint-disable no-unreachable-loop */
/* eslint-disable linebreak-style */
import url from 'url';
import * as controllers from './controllers.js';

export const routes = {
  ping: controllers.pingController,
  json: controllers.jsonController,
  html: controllers.htmlController,
  page: controllers.pageController,
  error: controllers.errorController,
  fizzbuzz: controllers.fizzbuzzController, // NO ENCUENTRA LA RUTA DE FIZZBUZZ
  notFound: controllers.notFoundController,
};

export const defaultRoute = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { name } = parsedUrl.query;

  if (name) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(`Hello ${name}!`);
  }
  res.statusCode = 302;
  res.setHeader('Location', '/notFound');
  return res.end('<h1>Redirect</h1>');
};
