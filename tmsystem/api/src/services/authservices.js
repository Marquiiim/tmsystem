const usermodels = require('../models/usermodels')
const jwttokens = require('../utils/jwt')
const bcrypt = require('../utils/bcrypt')

async function serviceLogin(email, password) {
    try {
        const user = await usermodels.findByEmail(email)

        if (!user) throw new Error('[TMSYSTEM] Usuário não existe.')

        if (await bcrypt.compare(password, user.password_hash)) throw new Error('[TMSYSTEM] Senha incorreta.')

        console.log('[TEST] Dados corretos.')

    } catch (error) {
        throw new Error(error)
    }
}

async function serviceRegister(name, email, password) {
    try {
        if (await usermodels.findByEmail(email)) throw new Error('[TMSYSTEM] Já existe um usuário com esse email no sistema.')

        const password_hashed = await bcrypt.hash(password)

        const userData = {
            name: name,
            email: email,
            password_hash: password_hashed,
            token_version: 0,
            role: 'user'
        }

        await usermodels.create(userData)

        const accessToken = await jwttokens.generateAccessToken({
            userId: userData.id,
            name: userData.name,
            email: userData.email,
            token_version: userData.token_version,
            role: userData.role
        })

        const refreshToken = await jwttokens.generateRefreshToken({
            userId: userData.id,
            name: userData.name,
            email: userData.email,
            token_version: userData.token_version,
            role: userData.role
        })

        delete userData.password_hash
        return {
            ...userData,
            tokens: {
                accessToken,
                refreshToken
            }
        }

    } catch (error) {
        throw error
    }
}

module.exports = {
    serviceLogin,
    serviceRegister
}