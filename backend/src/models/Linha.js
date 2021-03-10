import Sequelize, { Model } from 'sequelize';

export default class Linha extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Parada, {
      foreignKey: 'linha_id',
      through: 'paradaslinhas',
      as: 'paradas',
    });

    this.hasMany(models.Veiculo, {
      foreignKey: 'linha_id',
      as: 'veiculos',
    });
  }
}
