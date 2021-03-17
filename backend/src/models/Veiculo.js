import Sequelize, { Model } from 'sequelize';

export default class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          len: {
            args: [1, 50],
            msg: 'O nome do veículo precisa ter entre 1 e 50 caracteres',
          },
        },
        modelo: {
          type: Sequelize.STRING,
          len: {
            args: [6, 50],
            msg: 'O modelo precisa ter entre 6 e 50 caracteres',
          },
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
