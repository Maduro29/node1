import bcrypt from 'bcryptjs';
import db from '../models/index';
var salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let pw = await hassPw(data.password);
            db.Users.create({
                email: data.email,
                password: pw,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                keyrole: data.roleId
            })

            resolve('Done create');
        } catch (e) {
            reject(e);
        }
    })
}

let hassPw = (pw) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hash = bcrypt.hashSync(pw, salt);
            resolve(hash);
            console.log(hash);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser
}