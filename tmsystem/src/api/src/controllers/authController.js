function loginUser(req, res) {
    console.log("Login user called");
    res.json({ message: "Login endpoint funcionando!" });
}

function registerUser(req, res) {
    console.log("Register user called");
    res.json({ message: "Register endpoint funcionando!" });
}

module.exports = {
    loginUser,
    registerUser
};