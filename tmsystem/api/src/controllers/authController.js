const { serviceLogin, serviceRegister } = require('../services/authservices')
const { cookies_options } = require('../../data/cookieOptions')

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

module.exports = {
    controllerLogin,
    controllerRegister
};