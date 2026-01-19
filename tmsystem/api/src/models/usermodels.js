const { query } = require('../config/database')

const user = {

    create: async (userData) => {
        const result = await query(
            'INSERT INTO users (name, email, password_hash, token_version, role) VALUES (?, ?, ?, ?, ?)',
            [userData.name, userData.email, userData.password_hash, userData.token_version, userData.role]
        )
        return result
    },

    findByEmail: async (email) => {
        const rows = await query(
            `SELECT 
                u.*, 
                d.slug as departments
            from users u
            LEFT JOIN user_departments ud ON u.id = ud.user_id 
            LEFT JOIN departments d ON ud.department_id = d.id
            WHERE u.email = ?`,
            [email]
        )
        return rows[0] || null
    },

    findById: async (id) => {
        const rows = await query(
            `SELECT 
                u.*, 
                d.slug as departments
            from users u
            LEFT JOIN user_departments ud ON u.id = ud.user_id 
            LEFT JOIN departments d ON ud.department_id = d.id
            WHERE u.id = ?`,
            [id]
        )

        return rows[0] || null
    },

    createTicket: async (ticketData) => {
        const result = await query(
            `INSERT INTO open_tickets (title, description, category, user_id, created_by, department, limit_date)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [ticketData.title, ticketData.description, ticketData.category, ticketData.user_id, ticketData.created_by, ticketData.department, ticketData.limit_date]
        )

        return result
    }
}

module.exports = user