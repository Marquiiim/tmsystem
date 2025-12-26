const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/authroutes');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/api/auth', authRoutes);

module.exports = app;