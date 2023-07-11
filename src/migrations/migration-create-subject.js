'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('subject', {
            // id: {
            //     allowNull: false,
            //     autoIncrement: true,
            //     primaryKey: true,
            //     type: Sequelize.INTEGER
            // },
            subjectId: {
                type: Sequelize.STRING
            },
            currentStudent: {
                type: Sequelize.INTEGER
            },
            maxStudent: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            teacherId: {
                type: Sequelize.INTEGER
            },
            time: {
                type: Sequelize.INTEGER
            },
            period: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('subject');
    }
};