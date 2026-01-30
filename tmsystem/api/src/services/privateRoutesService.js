const jwttokens = require('../utils/jwt')

async function verifyTokens(accessToken, refreshToken) {
    try {
        await jwttokens.verifyAccessToken(accessToken)
        return { valid: true }
    } catch (accessError) {
        try {
            const refreshVerify = await jwttokens.verifyRefreshToken(refreshToken)

            if (!refreshVerify) throw new Error('[TMSYSTEM] Sessão expirada.')

            const newAccessToken = await jwttokens.generateAccessToken({
                userId: refreshVerify.userId,
                name: refreshVerify.name,
                email: refreshVerify.email,
                token_version: refreshVerify.token_version,
                role: refreshVerify.role
            })

            return {
                valid: true,
                newAccessToken: newAccessToken
            }
        } catch (refreshError) {
            throw refreshError
        }
    }
}

module.exports = {
    verifyTokens
}