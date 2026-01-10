async function logoutController(req, res) {
    try {
        res.clearCookie('access_token')
        res.clearCookie('refresh_token')

        return res.sendStatus(204)
    } catch (error) {
        return res.sendStatus(500)
    }
}

module.exports = {
    logoutController
}