import Sequelize, { Model } from 'sequelize';

export default class Parada extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          len: {
            args: [6, 50],
            msg: 'O nome precisa ter entre 6 e 50 caracteres',
          },
        },
        latitude: {
          type: Sequelize.DOUBLE,
        },
        longitude: {
          type: Sequelize.DOUBLE,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Linha, {
      foreignKey: 'parada_id',
      through: 'paradaslinhas',
      as: 'linhas',
    });
  }
}
