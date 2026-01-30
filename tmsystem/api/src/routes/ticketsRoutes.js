const express = require('express')
const router = express.Router()

const { createTicketMiddleware } = require('../middlewares/ticketsMiddleware')
const { createTicketController } = require('../controllers/ticketsController')

router.post('/create', createTicketMiddleware, createTicketController)
/*router.post('/view-tickets', viewTicketMiddleware, viewTicketController)
router.post('/cancel-ticket', cancelTicketMiddleware, cancelTicketController)
router.post('assume-ticket')
router.get('/my-tickets')*/

module.exports = router