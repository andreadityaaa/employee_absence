'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addColumn('Absences', 'userId', {
    //   type: Sequelize.INTEGER,
    //   reference : {
    //     model : 'Users',
    //     key: 'id'
    //   },
    //     onDelete : 'cascade',
    //     onUpdate : 'cascade'
    // })
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('Absences', 'userId')
  }
};
