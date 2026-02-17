const { createTicketService,
    myTicketsService,
    myDepartmentTicketsService,
    detailsTicketService,
    assumeTicketService,
    assumedTicketService,
    changeStatusTicketService,
    cancelMyTicketService } = require('../services/ticketsServices')

async function createTicketController(req, res) {
    try {
        await createTicketService(req.cookies, req.body)

        return res.status(201).json({ success: true, message: '[TMSYSTEM] Chamado criado com sucesso.' })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao criar chamado.' })
    }
}

async function myTicketsController(req, res) {
    try {
        const myTickets = await myTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: myTickets || [] })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao buscar chamados.' })
    }
}

async function myDepartmentTicketsController(req, res) {
    try {
        const ticketsDepartment = await myDepartmentTicketsService(req.cookies)

        return res.status(200).json({ success: true, tickets: ticketsDepartment || [] })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao buscar chamados.' })
    }
}

async function detailsTicketController(req, res) {
    try {
        const ticket = await detailsTicketService(req.body.ticket_id)

        if (!ticket) return res.status(404).json({ success: false, message: '[TMSYSTEM] Chamado não encontrado.' })

        return res.status(200).json({ success: true, ticket: ticket || [] })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao buscar detalhes do chamado.' })
    }
}

async function assumeTicketController(req, res) {
    try {
        await assumeTicketService(req.cookies, req.body.ticket_id)

        return res.status(200).json({ success: true, message: '[TMSYSTEM] Chamado assumido para seu usuário com sucesso.' })
    } catch (error) {
        return res.status(403).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao assumir chamado.' })
    }
}

async function assumedTicketController(req, res) {
    try {
        const assumedTickets = await assumedTicketService(req.cookies)

        return res.status(200).json({ success: true, tickets: assumedTickets || [] })
    } catch (error) {
        return res.status(204).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao buscar chamados.' })
    }
}

async function changeStatusTicketController(req, res) {
    try {
        await changeStatusTicketService(req.cookies, req.body)

        return res.status(200).json({ success: true, message: '[TMSYSTEM] Status alterado com sucesso.' })
    } catch (error) {
        return res.status(403).json({ success: false, message: error.message || '[TMSYSTEM] Erro ao mudar status do chamado.' })
    }
}

async function cancelMyTicketController(req, res) {
    try {
        await cancelMyTicketService(req.cookies, req.body.ticket_id)

        return res.status(200).json({ success: true, message: '[TMSYSTEM] Chamado cancelado com sucesso.' })
    } catch (error) {
        return res.status(403).json({ success: false, message: error.message })
    }
}

module.exports = {
    createTicketController,
    myTicketsController,
    myDepartmentTicketsController,
    detailsTicketController,
    assumeTicketController,
    assumedTicketController,
    changeStatusTicketController,
    cancelMyTicketController
}