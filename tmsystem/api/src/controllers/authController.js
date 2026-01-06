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
    }
}

async function controllerLogin(req, res) {
    try {
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

        res.cookie('access_token', response.tokens.accessToken, cookies_options.access_token)

        res.cookie('refresh_token', response.tokens.refreshToken, cookies_options.refresh_token)

        res.status(201).json({
            success: true,
            message: '[TMSYSTEM] Usuário logado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })


    } catch (error) {
        return res.status(401).json({
            success: false,
            message: `[TMSYSTEM] ${error}`
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

        return res.status(200).json({
            success: true,
            message: '[TMSYSTEM] Usuário registrado com sucesso.',
            user: response.user,
            redirectTo: '/home'
        })

    } catch (error) {
        return res.status(409).json({
            success: false,
            message: `[TMSYSTEM] ${error}`
        })
    }
}

async function controllerTokens(req, res) {
    try {
        console.log('🔍 Cookies recebidos:', req.cookies);
        const accessToken = req.cookies.access_token
        const refreshToken = req.cookies.refresh_token

        console.log('✅ Access Token recebido:', accessToken ? 'SIM' : 'NÃO');
        console.log('✅ Refresh Token recebido:', refreshToken ? 'SIM' : 'NÃO');
        console.log('🔑 Access Token (primeiros 20 chars):', accessToken?.substring(0, 20) + '...');
        console.log('🔑 Refresh Token (primeiros 20 chars):', refreshToken?.substring(0, 20) + '...');

        if (accessToken) {
            const parts = accessToken.split('.');
            console.log('📝 Access Token tem', parts.length, 'partes');
        }

        await verifyTokensLogin(accessToken, refreshToken)
        console.log('🎯 Resultado da verificação:', result);
        return res.status(200).json({ valid: true })
    } catch (error) {
        return res.status(401).json({ valid: false, error: '[TMSYSTEM] Tokens inválidos.' })
    }
}

module.exports = {
    controllerLogin,
    controllerRegister,
    controllerTokens
};