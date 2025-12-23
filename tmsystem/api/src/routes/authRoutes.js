const express = require('express');
const router = express.Router();

const { loginUser, registerUser } = require('../controllers/authcontroller');
const { middlewareLogin, middlewareRegister } = require('../middlewares/authmidleware')

router.post('/login', middlewareLogin, loginUser);
router.post('/register', middlewareRegister, registerUser);

module.exports = router;