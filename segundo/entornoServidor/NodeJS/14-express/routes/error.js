/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  const htmlFilePath = path.join(__dirname, '..', 'public', 'html', 'error.html');
  res.sendFile(htmlFilePath);
});

module.exports = router;
