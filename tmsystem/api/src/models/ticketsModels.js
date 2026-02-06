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

        return result || null
    },

    findById: async (id) => {
        const result = await query(
            `SELECT * FROM tickets
            WHERE id = ?
            LIMIT 1`, [id]
        )
        return result[0] || null
    },

    myTickets: async (id) => {
        const result = await query(
            `SELECT 
                t.id AS ticket_id,
                t.description,
                t.status,
                t.priority,
                t.category,
                t.subcategory,
                d.name AS department,
                ur.name AS requester,
                ua.name AS assigned_to,
                uc.name AS created_by,
                t.created_at,
                t.updated_at,
                t.anydesk_id
            FROM tickets t
                LEFT JOIN departments d ON t.department_id = d.id
                LEFT JOIN users ur ON t.requester_id = ur.id
                LEFT JOIN users ua ON t.assigned_to = ua.id
                LEFT JOIN users uc ON t.created_by = uc.id
            WHERE t.status NOT IN ('fechado', 'resolvido', 'cancelado')
                AND t.requester_id = ?
            ORDER BY t.created_at DESC;`, [id]
        )
        return result || null
    },

    myDepartmentTickets: async (id) => {
        const result = await query(
            `SELECT 
                t.id AS ticket_id,
                t.description,
                t.status,
                t.priority,
                t.category,
                t.subcategory,
                d.name AS department,
                ur.name AS requester,
                ua.name AS assigned_to,
                uc.name AS created_by,
                t.created_at,
                t.updated_at,
                t.anydesk_id
            FROM tickets t
                LEFT JOIN departments d ON t.department_id = d.id
                LEFT JOIN users ur ON t.requester_id = ur.id
                LEFT JOIN users ua ON t.assigned_to = ua.id
                LEFT JOIN users uc ON t.created_by = uc.id
            WHERE t.status NOT IN ('fechado', 'resolvido', 'cancelado')
                AND t.department_id = ?
            ORDER BY t.created_at DESC;`, [id]
        )
        return result || null
    },

    deleteTicket: async (id) => {
        const result = await query(
            `DELETE FROM tickets
            WHERE id = ?`, [id]
        )
        return result || null
    }
}

module.exports = ticket