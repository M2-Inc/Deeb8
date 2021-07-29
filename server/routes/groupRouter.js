const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.post(
  '/',
  groupController.validateGroupname,
  groupController.createGroup,
  function (req, res) {
    return res.status(400).json('created new group');
  },
);

module.exports = router;
