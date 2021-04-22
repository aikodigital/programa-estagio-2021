'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('vehicle', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      line_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model:'busLine', key: 'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      model:{
        type:Sequelize.STRING,
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

    await queryInterface.dropTable('vehicle');

  }
};
