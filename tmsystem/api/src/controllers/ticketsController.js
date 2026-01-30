const { createTicketService } = require('../services/ticketsServices')

async function createTicketController(req, res) {

    try {
        await createTicketService(req.cookies, req.body)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createTicketController
}