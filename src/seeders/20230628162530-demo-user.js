'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // typerole: DataTypes.STRING,
    // keyrole: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      email: 'mdt.uet@gmail.com',
      password: '1234',
      firstName: 'Dung',
      lastName: 'Tran',
      address: 'HP',
      gender: 1,
      typerole: 'ROLE',
      keyrole: 'R2'
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
