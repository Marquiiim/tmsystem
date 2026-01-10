const express = require('express');
const router = express.Router();

const { controllerLogin, controllerRegister, controllerTokens } = require('../controllers/authController');
const { middlewareLogin, middlewareRegister, middlewareTokens } = require('../middlewares/authMiddleware')

router.post('/login', middlewareLogin, controllerLogin);
router.post('/register', middlewareRegister, controllerRegister);
router.get('/verify-token', middlewareTokens, controllerTokens)

module.exports = router;