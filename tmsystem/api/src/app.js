const express = require('express');
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json());

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        error: '[TMSYSTEM] Muitas requisições, tente novamente mais tarde.'
    }
})

app.use(globalLimiter)

app.use('/api/auth', authRoutes);

module.exports = app;