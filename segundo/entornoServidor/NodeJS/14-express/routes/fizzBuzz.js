const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const number = parseInt(req.query.number, 10);

  if (Number.isNaN(number)) {
    return res.status(400).send('Lo introducido no es un numero, introduce un numero');
  }

  let result = '';

  for (let i = 1; i <= number; i += 1) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (output === '') output = i.toString();
    result += (i > 1 ? ', ' : '') + output;
  }

  res.send(result);
});

module.exports = router;
