const usermodels = require('../models/userModels')
const jwttokens = require('../utils/Jwt')
const bcrypt = require('../utils/Bcrypt')

async function serviceLogin(email, password) {
    try {
        const user = await usermodels.findByEmail(email)

        if (!user) throw new Error('[TMSYSTEM] Usuário não existe.')

        if (!user.is_active) throw new Error('[TMSYSTEM] Usuário inativo.')

        if (!(await bcrypt.compare(password, user.password_hash))) throw new Error('[TMSYSTEM] Senha incorreta.')

        const accessToken = await jwttokens.generateAccessToken({
            userId: user.id,
            name: user.name,
            email: user.email,
            token_version: user.token_version,
            role: user.role
        })

        const refreshToken = await jwttokens.generateRefreshToken({
            userId: user.id,
            token_version: user.token_version
        })

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            tokens: {
                accessToken,
                refreshToken
            }
        }

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

        const createdUser = await usermodels.create(userData)

        const accessToken = await jwttokens.generateAccessToken({
            userId: createdUser.insertId,
            name: userData.name,
            email: userData.email,
            token_version: userData.token_version,
            role: userData.role
        })

        const refreshToken = await jwttokens.generateRefreshToken({
            userId: createdUser.insertId,
            token_version: userData.token_version
        })

        delete userData.password_hash
        return {
            user: {
                id: createdUser.insertId,
                name: userData.name,
                email: userData.email,
                role: userData.role
            },
            tokens: {
                accessToken,
                refreshToken
            }
        }

    } catch (error) {
        throw error
    }
}

async function verifyTokensLogin(accessToken, refreshToken) {
    try {
        await jwttokens.verifyAccessToken(accessToken)
        await jwttokens.verifyRefreshToken(refreshToken)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    serviceLogin,
    serviceRegister,
    verifyTokensLogin
}