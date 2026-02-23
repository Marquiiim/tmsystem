const jwttokens = require('../utils/jwt')
const usermodels = require('../models/userModels')
const ticketsmodels = require('../models/ticketsModels')

async function createTicketService(token, dataForm) {
    const { access_token } = token
    const { department_id, category, subcategory, priority, description, anydesk } = dataForm
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const user = await usermodels.findById(accessVerify.userId)

        const ticketData = {
            description: description,
            priority: priority,
            category: category,
            subcategory: subcategory,
            department_id: department_id,
            requester_id: user.id,
            created_by: user.id,
            anydesk_id: anydesk || null
        }

        await ticketsmodels.create(ticketData)

    } catch (accessError) {
        throw accessError
    }
}

async function myTicketsService(token) {
    const { access_token } = token
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)

        const tickets = await ticketsmodels.myTickets(accessVerify.userId)

        return tickets
    } catch (error) {
        throw error
    }
}

async function myDepartmentTicketsService(token) {
    const { access_token } = token
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const departmentUser = await usermodels.findById(accessVerify.userId)
        const departmentTickets = await ticketsmodels.myDepartmentTickets(departmentUser.department_id)

        return departmentTickets
    } catch (error) {
        throw error
    }
}

async function detailsTicketService(ticket_id) {
    try {
        const ticketInfo = await ticketsmodels.detailsTicket(ticket_id)

        return ticketInfo
    } catch (error) {
        throw error
    }
}

async function assumeTicketService(token, ticket_id) {
    const { access_token } = token
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const userInfo = await usermodels.findById(accessVerify.userId)
        await ticketsmodels.assumeTicket(ticket_id, userInfo.id, userInfo.department_id)
    } catch (error) {
        throw error
    }
}

async function assumedTicketService(token) {
    const { access_token } = token
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const userInfo = await usermodels.findById(accessVerify.userId)
        const assumedTickets = await ticketsmodels.assumedTicket(userInfo.id)

        return assumedTickets
    } catch (error) {
        throw error
    }
}

async function reopenTicketService(token, ticket_id) {
    const { access_token } = token
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const userInfo = await usermodels.findById(accessVerify.userId)
        const reopen = await ticketsmodels.reopenTicket(userInfo, ticket_id)


    } catch (error) {
        throw error
    }
}

async function changeStatusTicketService(token, data) {
    const { access_token } = token
    const { ticket_id, newStatus, reason } = data
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)
        const userInfo = await usermodels.findById(accessVerify.userId)
        await ticketsmodels.changeStatusTicket(userInfo.id, ticket_id, newStatus, reason)
    } catch (error) {
        throw error
    }
}

async function cancelMyTicketService(token, ticket_id) {
    const { access_token } = token
    try {
        const ticket = await ticketsmodels.findById(ticket_id)
        const userToken = await jwttokens.verifyAccessToken(access_token)
        const userDepartment = await usermodels.findById(userToken.userId)

        if (userToken.userId !== ticket.requester_id ||
            userToken.userId !== ticket.created_by ||
            userToken.userId !== ticket.assigned_to ||
            userDepartment.department_id === ticket.department_id) {
            await ticketsmodels.cancelTicket(ticket.id)
        } else {
            throw new Error('[TMSYSTEM] Você não tem permissão para cancelar o chamado.')
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    createTicketService,
    myTicketsService,
    myDepartmentTicketsService,
    detailsTicketService,
    assumeTicketService,
    assumedTicketService,
    changeStatusTicketService,
    reopenTicketService,
    cancelMyTicketService
}