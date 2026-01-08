const { serviceLogin, serviceRegister, verifyTokensLogin } = require('../services/authservices')

const cookies_options = {

    access_token: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 15 * 60 * 1000
    },

    refresh_token: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 * 1000
    },
    clear_options: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/'
    }
}

async function controllerLogin(req, res) {
    try {
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

        res.cookie('access_token', response.tokens.accessToken, cookies_options.access_token)

        res.cookie('refresh_token', response.tokens.refreshToken, cookies_options.refresh_token)

        res.status(200).json({
            success: true,
            message: '[TMSYSTEM] Usuário logado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message 
        })
    }
}

async function controllerRegister(req, res) {
    try {
        const {
            name,
            email,
            password } = req.body

        const response = await serviceRegister(name, email, password)

        res.cookie('access_token', response.tokens.accessToken, cookies_options.access_token)

        res.cookie('refresh_token', response.tokens.refreshToken, cookies_options.refresh_token)

        return res.status(201).json({
            success: true,
            message: '[TMSYSTEM] Usuário registrado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })

    } catch (error) {
        return res.status(409).json({
            success: false,
            message: error.message
        })
    }
}

async function controllerTokens(req, res) {
    try {
        const accessToken = req.cookies.access_token
        const refreshToken = req.cookies.refresh_token

        await verifyTokensLogin(accessToken, refreshToken)

        return res.status(200).json({ valid: true })
    } catch (error) {
        res.clearCookie('access_token', cookies_options.clear_options)
        res.clearCookie('refresh_token', cookies_options.clear_options)

        return res.status(401).json({ valid: false, error: '[TMSYSTEM] Sessão expirada. Por favor, faça login novamente.' })
    }
}

module.exports = {
    controllerLogin,
    controllerRegister,
    controllerTokens
};