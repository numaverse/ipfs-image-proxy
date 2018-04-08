const express = require('express');
const { ipfs, resize } = require('./utils');

const router = express.Router();

router.get('/image/:hash', async function (req, res, next) {
  const { hash } = req.params;
  console.log("Fetching IPFS hash:", hash);
  try {
    const file = await ipfs(hash);
    const img = await resize(file, req.query);
    res.write(img);
    res.end();
  } catch (error) {
    next(error)
  }
});

router.errorHandler = function (err, req, res, next) {
  console.log("Error found:", err);
  res.status(500).send("Sorry, something when wrong.");
}

module.exports = router;