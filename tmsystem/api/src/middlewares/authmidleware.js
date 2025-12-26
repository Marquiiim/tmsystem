function middlewareLogin(req, res) {
    console.log("Login Middleware user called");
    res.json({ message: "Login Middleware endpoint funcionando!" });
}

function middlewareRegister(req, res) {
    console.log("Register Middleware user called");
    res.json({ message: "Register Middleware endpoint funcionando!" });
}

module.exports = {
    middlewareLogin,
    middlewareRegister
}