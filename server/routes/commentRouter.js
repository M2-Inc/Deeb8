const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment, function (req, res) {
  return res.status(400).json('Successfully created comment!');
});

module.exports = router;
