const { createTicketService, myTicketsService, myDepartmentTicketsService } = require('../services/ticketsServices')

async function createTicketController(req, res) {
    try {
        await createTicketService(req.cookies, req.body)

        return res.status(200).json({ success: '[TMSYSTEM] Chamado criado com sucesso.' })
    } catch (error) {
        console.log(error)
    }
}

async function myTicketsController(req, res) {
    try {
        const myTickets = await myTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: myTickets })
    } catch (error) {
        console.log(error)
    }
}

async function myDepartmentTicketsController(req, res) {
    try {
        const ticketsDepartment = await myDepartmentTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: ticketsDepartment })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createTicketController,
    myTicketsController,
    myDepartmentTicketsController
}