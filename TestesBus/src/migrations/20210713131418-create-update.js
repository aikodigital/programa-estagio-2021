'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("linhas", "updated_At", {

    type: Sequelize.DATE,
    default: Sequelize.NOW,

  }),

  down: (queryInterface) => queryInterface.removeColumn('linhas', 'updated_At')
};