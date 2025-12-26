const bcrypt = require('bcryptjs')

async function hash(password) {
    return await bcrypt.hash(password, 12)
}

async function compare(password, password_hash) {
    return await bcrypt.compare(password, password_hash)
}

module.exports = {
    hash,
    compare
}