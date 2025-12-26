function middlewareLogin(req, res, next) {
    console.log(`[MIDDLEWARE] Dados de entrada: ${JSON.stringify(req.body)}`)
    const { email, password } = req.body

    const regex = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,20}$/
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ error: '[TMSYSTEM] Todos os campos devem ser textos.' })
    }

    if (!email || !password) {
        return res.status(400).json({ error: '[TMSYSTEM] Usuários inválidos.' })
    }

    if (!regex.email.test(email)) {
        return res.status(400).json({ error: '[TMSYSTEM] O email não atende as política de regras do sistema.' })
    }

    if (!regex.password.test(password)) {
        return res.status(400).json({ error: '[TMSYSTEM] A senha não atende as política de regras do sistema.' })
    }

    next()
}

function middlewareRegister(req, res) {
    console.log("Register Middleware user called");
    res.json({ message: "Register Middleware endpoint funcionando!" });
}

module.exports = {
    middlewareLogin,
    middlewareRegister
}