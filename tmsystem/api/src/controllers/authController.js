const { serviceLogin, serviceRegister } = require('../services/authservices')

async function controllerLogin(req, res) {
    try {
        console.log(`[CONTROLLER] Dados de entrada: ${JSON.stringify(req.body)}`)
        const { email, password } = req.body

        const response = await serviceLogin(email, password)

    } catch (error) {
        console.log(`[TMSYSTEM] ${error}`)
    }
}

async function controllerRegister(req, res) {
    console.log("Register user called");
    res.json({ message: "Register endpoint funcionando!" });
}

module.exports = {
    controllerLogin,
    controllerRegister
};