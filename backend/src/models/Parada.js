import Sequelize, { Model } from 'sequelize';

export default class Parada extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
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
