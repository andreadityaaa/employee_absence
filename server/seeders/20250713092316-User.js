'use strict';
const bcryptjs = require('bcryptjs')
const { getTodayDateTime } = require('../helpers/getDate')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      name: "Admin",
      email: "admin@mail.com",
      position: "Admin",
      phone: 6281234567890,
      password: bcryptjs.hashSync("qwerty"),
      createdAt: getTodayDateTime(),
      createdBy: "System",
      updatedAt: getTodayDateTime()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
