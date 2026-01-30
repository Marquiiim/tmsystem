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
    }
}

module.exports = user