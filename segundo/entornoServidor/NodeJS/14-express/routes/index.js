const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const { name } = req.query;
  if (name) {
    res.send(`Hello ${name}!`);
  } else {
    res.status(400).send('Name is required');
  }
});

router.post('/', (req, res) => {
  res.send('Got a POST request');
});

module.exports = router;
