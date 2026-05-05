const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

// 🔥 THIS LINE FIXES YOUR ERROR
router.get('/auth', authController.showLogin);

// Login
router.post('/login', authController.login);

// Register
router.post('/register', authController.register);

// Logout
router.get('/logout', authController.logout);

module.exports = router;