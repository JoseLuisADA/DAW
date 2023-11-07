const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  const { token } = req.query;
  if (token) {
    console.log(token);
  } else {
    const object = {};
    res.status(400).send('token is required');
  }
});

module.exports = router;
