const express = require('express');

const router = express.Router();

router.get('/dog', (req, res, next) => {
  const message = {
    grow: 'guau guau',
  };
  res.status(200).send(message);
});

router.get('/cat', (req, res, next) => {
  const message = {
    grow: 'miau',
  };
  res.status(200).send(message);
});

router.get('/pio', (req, res, next) => {
  const message = {
    grow: 'pio pio',
  };
  res.status(200).send(message);
});

router.get('*', (req, res) => {
  const message = {
    code: 404,
    error: 'Not Found',
    message: 'Error: Path not found',
  };
  res.status(404).send(message);
});

module.exports = router;
