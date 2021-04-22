'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('busStop', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      latitude:{
        type:Sequelize.DOUBLE,
        allowNull:false
      },
      longitude:{
        type: Sequelize.DOUBLE,
        allowNull:false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('busStop');

  }
};
