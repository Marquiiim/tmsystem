const express = require('express')
const router = express.Router()

const { logoutController } = require('../controllers/logoutController')
const { controllerTokens } = require('../controllers/privateRoutesController')

router.post('/logout', logoutController)
router.get('/private-routes', controllerTokens)

module.exports = router