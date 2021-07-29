const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.post('/', postsController.createPost, function (req, res) {
  return res.status(400).json('Successful post creation.');
});

module.exports = router;
