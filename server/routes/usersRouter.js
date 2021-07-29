const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

router.post(
  '/',
  usersController.validateUsername,
  usersController.createUser,
  function (req, res) {
    return res.status(200).json('Successful signup');
  },
);

module.exports = router;
