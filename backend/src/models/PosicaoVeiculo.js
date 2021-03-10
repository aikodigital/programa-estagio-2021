import Sequelize, { Model } from 'sequelize';

export default class PosicaoVeiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        latitude: {
          type: Sequelize.DOUBLE,
        },
        longitude: {
          type: Sequelize.DOUBLE,
        },
        veiculo_id: {
          type: Sequelize.BIGINT,
        },
      },
      {
        sequelize,
        tableName: 'posicaoveiculos',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Veiculo, { foreignKey: 'veiculo_id', as: 'veiculo' });
  }
}
