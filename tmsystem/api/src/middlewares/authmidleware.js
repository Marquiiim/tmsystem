const regex = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,20}$/
}

function middlewareLogin(req, res, next) {
    const { email, password } = req.body

    if (typeof email !== 'string' || typeof password !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Os dados informados não correspondem aos tipos esperados para cada campo.' })

    if (!email || !password) return res.status(400).json({ error: '[TMSYSTEM] Usuário inválido.' })

    if (!regex.email.test(email)) return res.status(400).json({ error: '[TMSYSTEM] O email não atende as política de regras do sistema.' })

    if (!regex.password.test(password)) return res.status(400).json({ error: '[TMSYSTEM] A senha não atende as política de regras do sistema.' })

    // VERIFICAR JWT & ARMAZENAR EM COOKIES

    next()
}

function middlewareRegister(req, res, next) {

    const {
        companyCode,
        name,
        email,
        password,
        confirmPassword } = req.body

    if (typeof companyCode !== 'string' ||
        typeof name !== 'string' ||
        typeof email !== 'string' ||
        typeof password !== 'string' ||
        typeof confirmPassword !== 'string') return res.status(400).json({ error: '[TMSYSTEM] Os dados informados não correspondem aos tipos esperados para cada campo.' })

    if (!companyCode ||
        !name ||
        !email ||
        !password ||
        !confirmPassword) return res.status(400).json({ error: '[TMSYSTEM] Usuário inválido' })


    // CÓDIGO PADRÃO TEMPORÁRIO DA EMPRESA (180)
    if (companyCode !== '180') return res.status(400).json({ error: '[TMSYSTEN] Empresa inexistente.' })

    if (!regex.email.test(email)) return res.status(400).json({ error: '[TMSYSTEM] O email não atende as política de regras do sistema.' })

    if (!regex.password.test(password)) return res.status(400).json({ error: '[TMSYSTEM] A senha não atende as política de regras do sistema.' })

    if (password !== confirmPassword) return res.status(400).json({ error: '[TMSYSTEM] As senhas não coincidem.' })

    next()

}

module.exports = {
    middlewareLogin,
    middlewareRegister
}