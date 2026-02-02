const jwttokens = require('../utils/jwt')
const usermodels = require('../models/userModels')
const ticketsmodels = require('../models/ticketsModels')

async function createTicketService(tokens, dataForm) {
    const { access_token } = tokens
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

async function searchMyTicketsService(tokens) {
    const { access_token } = tokens
    try {
        const accessVerify = await jwttokens.verifyAccessToken(access_token)

        const tickets = await ticketsmodels.searchMyTickets(accessVerify.userId)

        return tickets
    } catch (error) {
        throw error
    }
}

module.exports = {
    createTicketService,
    searchMyTicketsService
}