const user = require('../models/usermodels')
const jwttokens = require('../utils/jwt')
const bcrypt = require('../utils/bcrypt')

async function serviceLogin(email, password) {
    try {
        console.log('[SERVICE] Dados de entrada', email, password)

        if (!(await user.findByEmail(email))) {
            throw new Error('[TMSYSTEM] Usuário não existe.')
        }

        const { password_hash } = await user.findByEmail(email)

        if (!(await bcrypt.compare(password, password_hash))) {
            throw new Error('[TMSYSTEM] Senha incorreta.')
        }


    } catch (error) {
        console.log(`[TMSYSTEM] ${error}`)
    }
}

async function serviceRegister() {

}

module.exports = {
    serviceLogin,
    serviceRegister
}