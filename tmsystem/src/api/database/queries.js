const db = require('../config/database')

const queries = {

    getUserById: async (userId) => {
        const users = await db.query(
            'SELECT id, name, email, created_at FROM users WHERE id = ?', [userId]
        )
        return users[0] || null
    }

}

module.exports = queries