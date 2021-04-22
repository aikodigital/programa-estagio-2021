'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('vehiclePos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      vehicle_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model:'vehicle', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      latitude:{
        type: Sequelize.DOUBLE,
        allowNull:false
      },
      longitude:{
        type:Sequelize.DOUBLE,
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

    await queryInterface.dropTable('vehiclePos');

  }
};
