const jwt = require('jsonwebtoken')

const JWT_CONFIG = {
    accessToken: {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '24h',
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE
    },
    refreshToken: {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE
    }
}

const jwttokens = {
    generateAccessToken: async (payload) => {
        return jwt.sign(payload, JWT_CONFIG.accessToken.secret, {
            expiresIn: JWT_CONFIG.accessToken.expiresIn,
            issuer: JWT_CONFIG.accessToken.issuer,
            audience: JWT_CONFIG.accessToken.audience
        })
    },

    generateRefreshToken: async (payload) => {
        return jwt.sign(payload, jwt.CONFIG.refreshToken.secret, {
            expiresIn: JWT_CONFIG.refreshToken.expiresIn,
            issuer: JWT_CONFIG.refreshToken.issuer,
            audience: JWT_CONFIG.refreshToken.audience
        })
    },

    verifyAccessToken: async (token) => {
        try {
            return jwt.verify(token, JWT_CONFIG.accessToken.secret, {
                issuer: JWT_CONFIG.accessToken.issuer,
                audience: JWT_CONFIG.accessToken.audience
            })
        } catch (error) {
            throw new Error('[TMSYSTEM] Token inválido ou expirado, tente novamente.')
        }
    },

    verifyRefreshToken: async (token) => {
        try {
            return jwt.verify(token, jwt.CONFIG.refreshToken.secret, {
                issuer: JWT_CONFIG.refreshToken.issuer,
                audience: JWT_CONFIG.refreshToken.audience
            })
        } catch (error) {
            throw new Error('[TMSYSTEM] Token inválido ou expirado, tente novamente.')
        }
    }
}

module.exports = jwttokens