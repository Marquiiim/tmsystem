const { serviceLogin, serviceRegister } = require('../services/authservices')

async function controllerLogin(req, res) {
    try {
        console.log(`[CONTROLLER] Dados de entrada: ${JSON.stringify(req.body)}`)
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

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

        console.log(response)

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

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    controllerLogin,
    controllerRegister
};