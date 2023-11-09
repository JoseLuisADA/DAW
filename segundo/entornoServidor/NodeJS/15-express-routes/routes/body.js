const express = require('express');

const router = express.Router();

router.post('/', (req, res, next) => {
  const requestBody = req.body;
  const listItems = Object.entries(requestBody).map(([key, value]) => `<li>${key}: ${value}</li>`);

  const htmlResponse = `<h1>Parámetros recibidos</h1><ul>${listItems.join('')}</ul>`;

  res.send(htmlResponse);
});

module.exports = router;
