const { query } = require('../config/database')

const user = {

    create: async (userData) => {
        const result = await query(
            `INSERT INTO users (name, 
            email, 
            password_hash, 
            token_version, 
            role) 
            VALUES (?, ?, ?, ?, ?)`,
            [userData.name,
            userData.email,
            userData.password_hash,
            userData.token_version,
            userData.role]
        )
        return result
    },

    findByEmail: async (email) => {
        const rows = await query(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        )
        return rows[0] || null
    },

    findById: async (id) => {
        const rows = await query(
            `SELECT 
                u.*,
                d.slug AS department_slug,
                d.name AS department_name,
                ud.is_manager,
                ud.assigned_at
            FROM users u
            LEFT JOIN user_department ud ON u.id = ud.user_id
            LEFT JOIN departments d ON ud.department_id = d.id
            WHERE u.id = ?;`,
            [id]
        )

        return rows[0] || null
    },

    createTicket: async (ticketData) => {
        const result = await query(
            `INSERT INTO open_tickets (description, 
            status, 
            priority, 
            category, 
            subcategory, 
            department_id, 
            requester_id, 
            created_by,
            anydesk_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [ticketData.description,
            ticketData.status,
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

module.exports = user