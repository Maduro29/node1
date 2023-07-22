import db from "../models/index";
import bcrypt from 'bcryptjs';


let checkUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let emailExist = await checkUserEmail(email);
            if (emailExist) {
                let user = await db.Users.findOne({
                    attributes: ['email', 'keyrole', 'password'],
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    let checkPassword = bcrypt.compareSync(password, user.password);
                    if (checkPassword) {
                        userData.errCode = 0;
                        userData.message = "Okei!";
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 2;
                        userData.message = "Wrong password! Try again!";
                    }
                } else {
                    userData.errCode = 3;
                    userData.message = "User is now not found! Try again! Sorry about that."
                }
            } else {
                userData.errCode = 1;
                userData.message = "Email is not existed! Try another one."
            }

            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Users.findOne({
                where: { email: email }
            })

            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    checkUserLogin: checkUserLogin
}