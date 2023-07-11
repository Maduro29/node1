const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_node', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection done!');
    } catch (error) {
        console.error('Error: ', error);
    }
}

module.exports = connectDB;