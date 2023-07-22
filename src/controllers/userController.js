import userService from '../services/userService'

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'missing login information'
        })
    }

    let userData = await (userService.checkUserLogin(email, password));

    return res.status(200).json({
        // email: this.email,
        errCode: userData.errCode,
        message: userData.message,
        userData: userData
    })
}

module.exports = {
    handleLogin: handleLogin
}