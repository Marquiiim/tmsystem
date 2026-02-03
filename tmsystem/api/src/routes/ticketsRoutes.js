const express = require('express')
const router = express.Router()

const { createTicketMiddleware, ticketsMiddlewareGlobal } = require('../middlewares/ticketsMiddleware')
const { createTicketController, myTicketsController, myDepartmentTicketsController } = require('../controllers/ticketsController')

router.post('/create', createTicketMiddleware, createTicketController)
router.post('/my-tickets', ticketsMiddlewareGlobal, myTicketsController)
router.post('/department-tickets', ticketsMiddlewareGlobal, myDepartmentTicketsController)
/*router.post('/cancel-ticket', cancelTicketMiddleware, cancelTicketController)
router.post('assume-ticket')*/

module.exports = router