'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("Veiculos", "linhas_id", {
    type: Sequelize.INTEGER,
    references: { model: 'linhas', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("Veiculos", "linhas_id")
};