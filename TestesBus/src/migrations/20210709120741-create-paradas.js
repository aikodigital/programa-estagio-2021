'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Paradas', {

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

      latitude:
      {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },

      longitude:
      {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('Paradas');
  }
};
