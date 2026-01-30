const { query } = require('../config/database')

const ticket = {
    create: async (ticketData) => {
        const result = await query(
            `INSERT INTO tickets (description,
            priority, 
            category, 
            subcategory, 
            department_id, 
            requester_id, 
            created_by,
            anydesk_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [ticketData.description,
            ticketData.priority,
            ticketData.category,
            ticketData.subcategory,
            ticketData.department_id,
            ticketData.requester_id,
            ticketData.created_by,
            ticketData.anydesk_id]
        )

        return result
    }
}

module.exports = ticket