const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  let message;
  const { name } = req.query;
  if (name) {
    message = `Hola ${name}`;
    res.status(200).send(message);
  } else {
    message = {
      code: 401,
      error: '',
      message: 'Introduce un nombre en la query con name=TuNombre',
    };
    res.status(401).send(message);
  }
});

module.exports = router;
