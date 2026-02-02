const { createTicketService, searchMyTicketsService } = require('../services/ticketsServices')

async function createTicketController(req, res) {
    try {
        await createTicketService(req.cookies, req.body)

        return res.status(200).json({ success: '[TMSYSTEM] Chamado criado com sucesso.' })
    } catch (error) {
        console.log(error)
    }
}

async function viewMyTicketsController(req, res) {
    try {
        const myTickets = await searchMyTicketsService(req.cookies)

        return res.status(200).json({ success: true, myTickets })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createTicketController,
    viewMyTicketsController
}