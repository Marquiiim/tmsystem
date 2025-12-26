const express = require('express');
const router = express.Router();

const { controllerLogin, controllerRegister } = require('../controllers/authcontroller');
const { middlewareLogin, middlewareRegister } = require('../middlewares/authmidleware')

router.post('/login', middlewareLogin, controllerLogin);
router.post('/register', middlewareRegister, controllerRegister);

module.exports = router;