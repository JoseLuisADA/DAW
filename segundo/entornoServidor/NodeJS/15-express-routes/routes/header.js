const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  let message;
  const { token } = req.query;
  if (token) {
    message = {
      code: 200,
      asunto: 'Authorized',
      message: 'Identificado correctamente',
    };
    res.status(200).send(message);
    console.log(token);
  } else {
    message = {
      code: 401,
      error: 'Unauthorized',
      message: 'Error: Set a token to login',
    };
    res.status(401).send(message);
  }
});

module.exports = router;
