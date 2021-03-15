import Sequelize, { Model } from 'sequelize';

export default class Linha extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O nome precisa ter entre 3 e 50 caracteres',
            },
          },
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
