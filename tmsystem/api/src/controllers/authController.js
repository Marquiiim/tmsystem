const { serviceLogin, serviceRegister, verifyTokensLogin } = require('../services/authservices')

async function controllerLogin(req, res) {
    try {
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

        res.cookie('access_token', response.tokens.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000
        })

        res.cookie('refresh_token', response.tokens.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            success: true,
            message: '[TMSYSTEM] Usuário logado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })

    } catch (error) {
        console.log(`[TMSYSTEM] ${error}`)
    }
}

async function controllerRegister(req, res) {
    try {
        const {
            name,
            email,
            password } = req.body

        const response = await serviceRegister(name, email, password)

        res.cookie('access_token', response.tokens.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000
        })

        res.cookie('refresh_token', response.tokens.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({
            success: true,
            message: '[TMSYSTEM] Usuário registrado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })

    } catch (error) {
        console.log(`[TMSYSTEM] ${error}`)
    }
}

async function controllerTokens(req, res) {
    try {
        const { accessToken, refreshToken } = req.body

        await verifyTokensLogin(accessToken, refreshToken)
    } catch (error) {
        throw new Error('[TMSYSTEM] Tokens inválidos.')
    }
}

module.exports = {
    controllerLogin,
    controllerRegister,
    controllerTokens
};