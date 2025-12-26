const { query } = require('../config/database')

const user = {

    create: async (userData) => {
        const result = await query(
            'INSERT INTO users (name, email, password_hash, role, created_at, is_active) VALUES (?, ?, ?, ?, ?, ?)',
            [userData.name, userData.email, userData.password_hash, userData.role, userData.created_at, userData.is_active]
        )
        return result
    },

    findByEmail: async (email) => {
        const rows = await query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        )
        return rows[0] || null
    },

    findById: async (id) => {
        const rows = await query(
            'SELECT * FROM users WHERE id = ?',
            [id]
        )
        return rows[0] || null
    }
}

module.exports = user