'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("linhas", "created_At", {

    type: Sequelize.DATE,
    default: Sequelize.NOW,

  }),

  down: (queryInterface) => queryInterface.removeColumn('linhas', 'created_At')
};