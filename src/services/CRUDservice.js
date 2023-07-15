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

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.Users.findAll({
                raw: true
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: userId },
                raw: true
            })

            if (user) {
                resolve(user);
            } else {
                resolve({});
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let editingUser = await db.Users.findOne({
                where: { id: data.id },
            })

            await editingUser.update({
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address
            })

            let allUsers = await db.Users.findAll();
            resolve(allUsers);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData
}