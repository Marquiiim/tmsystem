require('dotenv').config()
const mysql = require('mysql2')

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}

const pool = mysql.createPool(dbConfig)

function query(sql, params = []) {
    return new Promise((resolve, reject) => {
        pool.execute(sql, params, (error, results) => {
            if (error) reject(error)
            else resolve(results)
        })
    })
}

function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) reject(error)
            else resolve(connection)
        })
    })
}

module.exports = {
    query,
    getConnection,
    pool
}