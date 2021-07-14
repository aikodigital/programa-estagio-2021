'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('linhas', {

      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt:
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('linhas');
  }
};
