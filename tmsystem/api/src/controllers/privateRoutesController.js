const { verifyTokens } = require('../services/privateRoutesService')

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

async function controllerTokens(req, res) {
    try {
        const accessToken = req.cookies.access_token
        const refreshToken = req.cookies.refresh_token

        const isValid = await verifyTokens(accessToken, refreshToken)

        if (isValid?.newAccessToken) res.cookie('access_token', isValid.newAccessToken, cookies_options.access_token)

        return res.status(200).json({ valid: true })
    } catch (error) {
        res.clearCookie('access_token', cookies_options.clear_options)
        res.clearCookie('refresh_token', cookies_options.clear_options)

        return res.status(401).json({ valid: false, error: '[TMSYSTEM] Sessão expirada. Por favor, faça login novamente.' })
    }
}

module.exports = {
    controllerTokens
};