const express = require('express');
const router = express.Router();

const { controllerLogin, controllerRegister } = require('../controllers/authController');
const { middlewareLogin, middlewareRegister } = require('../middlewares/authMiddleware')

router.post('/login', middlewareLogin, controllerLogin);
router.post('/register', middlewareRegister, controllerRegister);

module.exports = router;