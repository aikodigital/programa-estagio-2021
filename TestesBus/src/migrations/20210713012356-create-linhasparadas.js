'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("linhas", "paradasid", {
    type: Sequelize.INTEGER,
    references: { model: 'Paradas', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('linhas', 'paradasid')
};