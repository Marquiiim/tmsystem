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

        if (result.affectedRows === 0) throw new Error('[TMSYSTEM] Erro ao abrir chamado, tente novamente.')

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
                d.name AS department_name,
                ur.name AS requester_name,
                ua.name AS assigned_to_name,
                uc.name AS created_by_name,
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

        if (!result || result.length === 0) throw new Error('[TMSYSTEM] Você não tem chamados abertos.')

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
                d.name AS department_name,
                ur.name AS requester_name,
                ua.name AS assigned_to_name,
                uc.name AS created_by_name,
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
                AND t.assigned_to IS NULL
            ORDER BY t.created_at DESC;`, [id]
        )

        if (!result || result.length === 0) throw new Error('[TMSYSTEM] Não há chamados abertos no seu departamento.')

        return result || null
    },

    detailsTicket: async (id) => {
        const result = await query(
            `SELECT 
                t.id AS ticket_id,
                t.description,
                t.status,
                t.priority,
                t.category,
                t.subcategory,
                t.department_id,
                t.requester_id,
                t.assigned_to,
                t.created_by,
                t.anydesk_id,
                t.created_at,
                t.updated_at,
                d.name AS department_name,
                ur.name AS requester_name,
                ua.name AS assigned_to_name,
                uc.name AS created_by_name
            FROM tickets t
            LEFT JOIN departments d ON t.department_id = d.id
            LEFT JOIN users ur ON t.requester_id = ur.id
            LEFT JOIN users ua ON t.assigned_to = ua.id
            LEFT JOIN users uc ON t.created_by = uc.id
            WHERE t.id = ?`, [id]
        )

        if (!result || result.length === 0) throw new Error('[TMSYSTEM] Chamado não encontrado.')

        return result[0] || null
    },

    assumeTicket: async (ticketId, userId, userDepartmentId) => {
        const ticketInfo = await query(
            `SELECT 
                t.*,
                d.name AS department_name
            FROM tickets t
            LEFT JOIN departments d on t.department_id = d.id
            WHERE t.id = ?`, [ticketId]
        )

        if (!ticketInfo || ticketInfo.length === 0) throw new Error('[TMSYSTEM] Chamado não encontrado.')

        const ticket = ticketInfo[0]

        if (ticket.assigned_to) throw new Error('[TMSYSTEM] Este chamado já está atribuído a um usuário.')

        if (ticket.department_id !== userDepartmentId) throw new Error('[TMSYSTEM] Você não pertence ao departamento desse chamado.')

        const invalidStatuses = ['em_andamento', 'pendente', 'resolvido', 'fechado', 'cancelado']

        if (invalidStatuses.includes((ticket.status || '').toLowerCase())) throw new Error(`[TMSYSTEM] Não é possível assumir esse status, pois seu status é de: ${ticket.status}`)

        const result = await query(
            `UPDATE tickets 
             SET assigned_to = ?, 
                status = 'pendente',
                updated_at = CURRENT_TIMESTAMP 
             WHERE id = ?
                AND assigned_to IS NULL
                AND status = ?`,
            [userId, ticketId, ticket.status]
        )

        if (result.affectedRows === 0) throw new Error('[TMSYTEM] Nenhum registro atualizado.')

        return result || null
    },

    assumedTicket: async (id) => {
        const result = await query(
            `SELECT 
                t.id AS ticket_id,
                t.description,
                t.status,
                t.priority,
                t.category,
                t.subcategory,
                t.department_id,
                t.requester_id,
                t.assigned_to,
                t.created_by,
                t.anydesk_id,
                t.created_at,
                t.updated_at,
                d.name AS department_name,
                ur.name AS requester_name,
                ua.name AS assigned_to_name,
                uc.name AS created_by_name
            FROM tickets t
            LEFT JOIN departments d ON t.department_id = d.id
            LEFT JOIN users ur ON t.requester_id = ur.id
            LEFT JOIN users ua ON t.assigned_to = ua.id
            LEFT JOIN users uc ON t.created_by = uc.id
            WHERE t.assigned_to = ?
                AND t.status NOT IN ('resolvido','fechado','cancelado')
            ORDER BY 
                t.updated_at DESC, 
                t.created_at DESC`, [id]
        )

        if (!result || result.length === 0) throw new Error('[TMSYSTEM] Você não tem chamados assumidos para seu usuário.')

        return result || null
    },

    toogleStatusTicket: async (userId, ticket_id, newStatus) => {

        const ticketInfo = await query(
            `SELECT
                t.id,
                t.assigned_to,
                t.department_id,
                t.status
            FROM tickets t
            WHERE t.id = ?`, [ticket_id]
        )

        if (!ticketInfo || ticketInfo.length === 0) throw new Error('[TMSYSTEM] Esse chamado não existe.')

        const userInfo = await query(
            `SELECT
                u.id,    
                u.user_id,
                u.department_id
            FROM user_department u
            WHERE u.user_id = ?`, [userId]
        )

        if (userInfo[0].userId !== ticketInfo[0].assigned_to &&
            userInfo[0].department_id !== ticketInfo[0].department_id) throw new Error('[TMSYSTEM] Você não tem permissão para alterar o status desse chamado')

        const result = await query(
            `UPDATE tickets
                SET status = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?`, [newStatus, ticket_id]
        )

        if (result.affectedRows === 0) throw new Error('[TMSYSTEM] Erro ao atualizar status do chamado, tente novamente.')

        return result || null
    },

    cancelTicket: async (id) => {
        const result = await query(
            `DELETE FROM tickets
            WHERE id = ?`, [id]
        )
        return result || null
    }
}

module.exports = ticket