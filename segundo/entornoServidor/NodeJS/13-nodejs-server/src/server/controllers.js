/* eslint-disable linebreak-style */
import url from 'url';
import fs from 'fs';

export function pingController(req, res) {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Request accepted</h1>');
}

export function jsonController(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const resObject = {
    message: 'hello world!',
  };
  return res.end(JSON.stringify(resObject));
}

export function pageController(req, res) {
  const filePath = 'src/pagina.html';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end('Error al leer el archivo');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    return res.end(data);
  });
}

export function errorController(req, res) {
  const filePath = 'src/error.html';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end('Error');
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    return res.end(data);
  });
}

export function fizzbuzzController(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const { query } = parsedUrl;

  if (path === '/fizzbuzz' && query.number) {
    const number = parseInt(query.number, 10);
    if (Number.isNaN(number)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      return res.end('El dato introducido no es un numero, introducir un numero');
    }

    let result = '';

    for (let i = 1; i <= number; i += 1) {
      let output = '';
      if (i % 3 === 0) output += 'Fizz';
      if (i % 5 === 0) output += 'Buzz';
      if (output === '') output = i.toString();

      result += (i > 1 ? ', ' : '') + output;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(result);
  }
  res.writeHead(400, { 'Content-Type': 'text/plain' });
  return res.end('Introduce un numero');
}

export function notFoundController(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Not Found</h1>');
}
