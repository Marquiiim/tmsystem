const express = require('express')
const router = express.Router()

const { createTicketMiddleware, ticketsMiddlewareGlobal } = require('../middlewares/ticketsMiddleware')
const { createTicketController, viewMyTicketsController } = require('../controllers/ticketsController')

router.post('/create', createTicketMiddleware, createTicketController)
router.get('/my-tickets', ticketsMiddlewareGlobal, viewMyTicketsController)
/*router.post('/department-tickets', viewTicketMiddleware, viewTicketController)
router.post('/cancel-ticket', cancelTicketMiddleware, cancelTicketController)
router.post('assume-ticket')*/

module.exports = router