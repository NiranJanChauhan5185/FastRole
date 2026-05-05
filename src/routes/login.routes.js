const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

// Show login page
router.get('/auth', loginController.showLogin);

// Register
router.post('/register', loginController.register);

// Login
router.post('/login', loginController.login);

// Logout
router.get('/logout', loginController.logout);

module.exports = router;