const jwttokens = require('../utils/jwt')
const usermodels = require('../models/userModels')
const ticketsmodels = require('../models/ticketsModels')
const user = require('../models/userModels')

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

async function cancelMyTicketService(token, ticket_id) {
    const { access_token } = token
    try {
        const ticket = await ticketsmodels.findById(ticket_id)
        const userToken = await jwttokens.verifyAccessToken(access_token)
        const userDepartment = await usermodels.findById(userToken.userId)

        console.log('Ticket a ser cancelado:', ticket.requester_id, ticket.created_by, ticket.assigned_to, ticket.departmentTickets)
        console.log('Demais informações do respectivo ticket a cancelar o ticket:', ticket)

        console.log('======================================')

        console.log('Usuário a cancelar o ticket:', userToken.userId)
        console.log('Demais informações do usuário a cancelar o ticket:', userDepartment)

        if (userToken.userId !== ticket.requester_id ||
            userToken.userId !== ticket.created_by ||
            userToken.userId !== ticket.assigned_to) throw new Error('[TMSYSTEM] Impossível cancelar chamado.')

        if (userDepartment.department_id !== ticket.department_id) throw new Error('[TMSYSTEM] Impossível cancelar chamado.')

        console.log('[SUCESSO NA EXCLUXÃO]')
    } catch (error) {
        throw error
    }
}

module.exports = {
    createTicketService,
    myTicketsService,
    myDepartmentTicketsService,
    cancelMyTicketService
}