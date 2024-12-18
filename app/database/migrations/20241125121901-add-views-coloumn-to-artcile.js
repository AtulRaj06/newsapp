'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add a new column to the "articles" table
    await queryInterface.addColumn('articles', 'view_count', {
      type: Sequelize.INTEGER, // Replace with your desired data type
      allowNull: false,        // Allow NULL values or set to false if required
      defaultValue: 0,     // Optional: Set a default value
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the column in case of rollback
    await queryInterface.removeColumn('articles', 'view_count');
  },
};
