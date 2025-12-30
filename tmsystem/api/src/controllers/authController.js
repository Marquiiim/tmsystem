const { serviceLogin, serviceRegister } = require('../services/authservices')

async function controllerLogin(req, res) {
    try {
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

        res.cookie('access_token', response.tokens.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        })

        res.cookie('refresh_token', response.tokens.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
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

        res.cookie('acces_token', response.tokens.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000
        })

        res.cookie('refresh_token', response.tokens.refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
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

module.exports = {
    controllerLogin,
    controllerRegister
};