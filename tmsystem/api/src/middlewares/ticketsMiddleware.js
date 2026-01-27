function createTicketMiddleware(req, res, next) {
    const { category, subcategory, priority, description, anydesk } = req.body
    const cookies = req.cookies

    console.log(cookies)

    console.log(category, subcategory, priority, description, anydesk)
}

module.exports = {
    createTicketMiddleware
}