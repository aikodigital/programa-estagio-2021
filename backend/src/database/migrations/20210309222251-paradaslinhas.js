module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('paradaslinhas', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      linha_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'linhas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      parada_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'paradas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('paradaslinhas');
  },
};
