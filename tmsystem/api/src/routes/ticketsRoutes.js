const express = require('express')
const router = express.Router()

const { createTicketMiddleware, ticketsMiddlewareGlobal } = require('../middlewares/ticketsMiddleware')
const { createTicketController,
    myTicketsController,
    myDepartmentTicketsController,
    detailsTicketController,
    assumeTicketController,
    assumedTicketController,
    cancelMyTicketController } = require('../controllers/ticketsController')

router.post('/create', createTicketMiddleware, createTicketController)
router.post('/my-tickets', ticketsMiddlewareGlobal, myTicketsController)
router.post('/department-tickets', ticketsMiddlewareGlobal, myDepartmentTicketsController)
router.post('/details-ticket', ticketsMiddlewareGlobal, detailsTicketController)
router.post('/assume-ticket', ticketsMiddlewareGlobal, assumeTicketController)
router.post('/assumed-tickets', ticketsMiddlewareGlobal, assumedTicketController)
router.post('/cancel-ticket', ticketsMiddlewareGlobal, cancelMyTicketController)

module.exports = router