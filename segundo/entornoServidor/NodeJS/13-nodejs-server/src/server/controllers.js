import fs from 'fs';
import url from 'url';

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

export function saludarDinamico(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const { name } = parsedUrl.query;

  if (name) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello ${name}!`);
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide a name parameter in the query string.');
  }
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

export function notFoundController(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  return res.end('<h1>Not Found</h1>');
}
