const jwttokens = require('../utils/Jwt')
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
                role: userInfo.role,
                created_at: userInfo.created_at,
                is_active: userInfo.is_active
            }
        })

    } catch (error) {
        return res.status(404).json({
            success: false,
            error: '[TMSYSTEM] Usuário não encontrado.'
        })
    }
}

module.exports = {
    searchProfileController
}