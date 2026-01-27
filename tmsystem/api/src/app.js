const express = require('express');
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
const sessionsRoutes = require('./routes/sessionsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const ticketsRoutes = require('./routes/ticketsRoutes')
require('dotenv').config()

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json());

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    skipSuccessfulRequests: true
});

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    skip: (req) => {
        return req.path.startsWith('/api/auth')
    },
    message: {
        error: '[TMSYSTEM] Muitas tentativas, tente novamente mais tarde.'
    }
})

app.use(globalLimiter)

app.use('/api/auth/login', authLimiter)
app.use('/api/auth/register', authLimiter)

app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/tickets', ticketsRoutes)

module.exports = app;