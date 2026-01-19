const jwttokens = require('../utils/Jwt')
const { cookies_options } = require('../../data/cookieOptions')
const user = require('../models/userModels')

async function searchProfileController(req, res) {
    try {
        const accessToken = req.cookies?.access_token
        const payload = await jwttokens.verifyAccessToken(accessToken)
        const userInfo = await user.findById(String(payload.userId))

        return res.status(200).json({
            success: true,
            user: {
                id: userInfo.id,
                name: userInfo.name,
                email: userInfo.email,
                departments: userInfo.departments,
                role: userInfo.role,
                created_at: userInfo.created_at,
                is_active: userInfo.is_active
            }
        })

    } catch (error) {
        try {
            const refreshToken = req.cookies?.refresh_token
            const refreshPayload = await jwttokens.verifyRefreshToken(refreshToken)

            if (!refreshPayload) throw new Error('[TMSYSTEM] Sessão expirada.')

            const newAccessToken = await jwttokens.generateAccessToken({
                userId: refreshPayload.userId,
                name: refreshPayload.name,
                email: refreshPayload.email,
                token_version: refreshPayload.token_version,
                role: refreshPayload.role
            })

            const reloadNewUserInfo = await user.findById(String(refreshPayload.userId))

            if (!reloadNewUserInfo) throw new Error('[TMSYSTEM] Usuário não encontrado')

            res.cookie('access_token', newAccessToken, cookies_options.access_token)

            return res.status(200).json({
                success: true,
                user: {
                    id: reloadNewUserInfo.id,
                    name: reloadNewUserInfo.name,
                    email: reloadNewUserInfo.email,
                    departments: reloadNewUserInfo.departments,
                    role: reloadNewUserInfo.role,
                    created_at: reloadNewUserInfo.created_at,
                    is_active: reloadNewUserInfo.is_active
                }
            })

        } catch (error) {
            return res.status(404).json({
                success: false,
                error: error.message
            })
        }
    }
}

module.exports = {
    searchProfileController
}