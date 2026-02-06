const { createTicketService, myTicketsService, myDepartmentTicketsService, cancelMyTicketService } = require('../services/ticketsServices')

async function createTicketController(req, res) {
    try {
        await createTicketService(req.cookies, req.body)

        return res.status(201).json({ success: true, message: '[TMSYSTEM] Chamado criado com sucesso.' })
    } catch (error) {
        return res.status(400).json({ success: false, message: error })
    }
}

async function myTicketsController(req, res) {
    try {
        const myTickets = await myTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: myTickets })
    } catch (error) {
        return res.status(204).json({ success: false, message: error.message })
    }
}

async function myDepartmentTicketsController(req, res) {
    try {
        const ticketsDepartment = await myDepartmentTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: ticketsDepartment })
    } catch (error) {
        return res.status(204).json({ success: false, message: error.message })
    }
}

async function cancelMyTicketController(req, res) {
    try {
        await cancelMyTicketService(req.cookies, req.body.ticket_id)

        return res.status(200).json({ success: true, message: '[TMSYSTEM] Chamado cancelado com sucesso.' })
    } catch (error) {
        return res.status(401).json({ success: false, message: error.message })
    }
}

module.exports = {
    createTicketController,
    myTicketsController,
    myDepartmentTicketsController,
    cancelMyTicketController
}