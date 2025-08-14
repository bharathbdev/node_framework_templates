const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// User routes
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);

module.exports = router;
