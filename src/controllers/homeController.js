import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.Users.findAll();
        console.log(data);
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('./test/crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send('post');
}

let displayCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    return res.render('./test/displayCRUD.ejs', {
        dataTable: data
    });
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        console.log(userData);
        return res.render('./test/editCRUD.ejs', {
            userData: userData
        })
    } else {
        return res.send('User not exist!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);
    return res.render('./test/displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let predelCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        console.log(userData);
        return res.render('./test/predelCRUD.ejs', {
            userData: userData
        })
    } else {
        return res.send('User not exist!');
    }
}

let deleteCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.deleteUserData(data);
    return res.render('./test/displayCRUD.ejs', {
        dataTable: allUsers
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    predelCRUD: predelCRUD,
    deleteCRUD: deleteCRUD
}