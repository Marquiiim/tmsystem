function createTicketMiddleware(req, res, next) {
    const { department_id, category, subcategory, priority, description, anydesk } = req.body
    const { access_token, refresh_token } = req.cookies

    if (!access_token || !refresh_token) return res.status(401).json({ error: '[TMSYSTEM] Sessão expirada, tente recarregar a página.' })

    if (!department_id) return res.status(400).json({ error: '[TMSYSTEM] Erro ao tentar reconhecer departamento, volte a página e reabra o ticket.' })

    if (!category ||
        !subcategory ||
        !priority) return res.status(400).json({ error: '[TMSYSTEM] Preencha e selecione todos os campos existentes.' })

    if (typeof department_id !== 'number') return res.status(400).json({ error: '[TMSYSTEM] O departamento informado é inválido.' })

    if (typeof category !== 'string' ||
        typeof subcategory !== 'string' ||
        typeof priority !== 'string' ||
        typeof description !== 'string' ||
        typeof anydesk !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Os dados informados não correspondem aos tipos esperados para cada campo.' })

    if (anydesk !== undefined && typeof anydesk !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Formato inválido no campo do anydesk' })

    if (description !== undefined && typeof description !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Formato inválido no campo do anydesk' })

    if (category.trim() === '' ||
        subcategory.trim() === '' ||
        priority.trim() === '') return res.status(400).json({ error: '[TMSYSTEM] Os campos não podem ser vazios.' })

    next()
}

function changeStatusTicketMiddleware(req, res, next) {
    const { access_token, refresh_token } = req.cookies
    const { reason } = req.body

    if (!access_token || !refresh_token) return res.status(401).json({ error: '[TMSYSTEM] Sessão expirada, tente recarregar a página.' })

    if (typeof reason !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Os dados informados não correspondem aos tipos esperados para cada campo.' })
    if (!reason) return res.status(400).json({ error: '[TMSYSTEM] Preencha o motivo da alteração dos status.' })
    if (reason.trim() === '') return res.status(400).json({ error: '[TMSYSTEM] Os campos não podem ser vazios.' })

    next()
}

function ticketsMiddlewareGlobal(req, res, next) {
    const { access_token, refresh_token } = req.cookies

    if (!access_token || !refresh_token) return res.status(401).json({ error: '[TMSYSTEM] Sessão expirada, tente recarregar a página.' })

    next()
}

module.exports = {
    createTicketMiddleware,
    changeStatusTicketMiddleware,
    ticketsMiddlewareGlobal
}