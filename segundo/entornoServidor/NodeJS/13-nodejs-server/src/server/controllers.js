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
  const { number } = parsedUrl.query;

  if (number) {
    const results = [];

    for (let i = 1; i <= number; i += 1) {
      if (i % 3 === 0 && i % 5 === 0) {
        results.push('FizzBuzz');
      } else if (i % 3 === 0) {
        results.push('Fizz');
      } else if (i % 5 === 0) {
        results.push('Buzz');
      } else {
        results.push(i.toString());
      }
    }
    const Finalresults = results.join('\n');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(Finalresults);
  }
  res.writeHead(400, { 'Content-Type': 'text/plain' }); //NO ENCUENTRA LA RUTA DE FIZZBUZZ
  return res.end('Introduce un número en la query');
}

export function notFoundController(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Not Found</h1>');
}
