'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class subject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    subject.init({
        subjectId: DataTypes.STRING,
        currentStudent: DataTypes.INTEGER,
        maxStudent: DataTypes.INTEGER,
        subjectName: DataTypes.STRING,
        teacherId: DataTypes.INTEGER,
        time: DataTypes.INTEGER,
        period: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'subject',
    });
    return subject;
};