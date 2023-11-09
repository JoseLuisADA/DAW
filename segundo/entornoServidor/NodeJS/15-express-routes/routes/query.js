const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  let message = '';
  const { n } = req.query;
  if (n) {
    for (let contador = 1; n >= contador; contador += 1) {
      message += `${contador}, `;
    }
    console.log(message);
    res.status(200).send(message);
  } else {
    for (let contador = 1; contador <= 100; contador += 1) {
      message += `${contador}, `;
    }
    res.status(401).send(message);
  }
});

module.exports = router;
