import Sequelize, { Model } from 'sequelize';

export default class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        modelo: {
          type: Sequelize.STRING,
        },
        linha_id: {
          type: Sequelize.BIGINT,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Linha, {
      foreignKey: 'linha_id',
      as: 'linhasveiculo',
    });

    this.hasOne(models.PosicaoVeiculo, {
      foreignKey: 'veiculo_id',
      as: 'posicao',
    });
  }
}
