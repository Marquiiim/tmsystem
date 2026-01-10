const express = require('express')
const router = express.Router()

const { searchProfileController } = require('../controllers/userController')

router.get('/search-profile', searchProfileController)

module.exports = router