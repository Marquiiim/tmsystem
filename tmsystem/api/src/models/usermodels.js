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