'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ps extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ps.init({
        studentId: DataTypes.INTEGER,
        subjectId: DataTypes.STRING,
        subjectName: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'personalschedule',
    });
    return ps;
};