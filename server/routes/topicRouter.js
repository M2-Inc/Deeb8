const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.post(
  '/',
  topicController.validateTopic,
  topicController.createTopic,
  function (req, res) {
    return res.status(200).json('Successful topic creation');
  },
);

module.exports = router;
