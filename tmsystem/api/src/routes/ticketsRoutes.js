const express = require('express')
const router = express.Router()

const { createTicketMiddleware, ticketsMiddlewareGlobal } = require('../middlewares/ticketsMiddleware')
const { createTicketController, myTicketsController, myDepartmentTicketsController, detailsTicketController, cancelMyTicketController } = require('../controllers/ticketsController')

router.post('/create', createTicketMiddleware, createTicketController)
router.post('/my-tickets', ticketsMiddlewareGlobal, myTicketsController)
router.post('/department-tickets', ticketsMiddlewareGlobal, myDepartmentTicketsController)
router.post('/details-ticket', ticketsMiddlewareGlobal, detailsTicketController)
router.post('/cancel-ticket', ticketsMiddlewareGlobal, cancelMyTicketController)
/*router.post('assume-ticket')*/

module.exports = router