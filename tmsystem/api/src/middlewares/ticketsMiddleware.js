function createTicketMiddleware(req, res, next) {
    const { department_id, category, subcategory, priority, description, anydesk } = req.body
    const { access_token, refresh_token } = req.cookies

    if (!access_token || !refresh_token) return res.status(401).json({ error: '[TMSYSTEM] Sessão expirada, tente recarregar a página.' })

    if (typeof department_id !== 'number' ||
        typeof category !== 'string' ||
        typeof subcategory !== 'string' ||
        typeof priority !== 'string' ||
        typeof description !== 'string' ||
        typeof anydesk !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Os dados informados não correspondem aos tipos esperados para cada campo.' })

    if (!department_id) return res.status(400).json({ error: '[TMSYSTEM] Erro ao tentar reconhecer departamento, volte a página e reabra o ticket.' })

    if (!category ||
        !subcategory ||
        !priority ||
        !description) return res.status(400).json({ error: '[TMSYSTEM] Preencha e selecione todos os campos existentes.' })

    next()
}

module.exports = {
    createTicketMiddleware
}