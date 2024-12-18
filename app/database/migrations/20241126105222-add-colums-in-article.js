'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('articles', 'media_type', {
      type: Sequelize.STRING,
      allowNull: false,  
      defaultValue: 'image'
    });

    await queryInterface.addColumn('articles', 'article_type', {
      type: Sequelize.STRING,
      allowNull: false,  
      defaultValue: 'news'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the column in case of rollback
    await queryInterface.removeColumn('articles', 'media_type');
    await queryInterface.removeColumn('articles', 'article_type');
  },
};
