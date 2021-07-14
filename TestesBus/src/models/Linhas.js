const { Sequelize, Model } = require("sequelize");

class Linhas extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: 'linhas',
      }
    );

    return this;
  }

  static associate(models) {

    this.belongsTo(models.Parada, {
      //through: 'Paradas',
      foreignKey: 'paradasid',
      as: 'parada',
    })

    this.hasMany(models.Veiculo, {
      //through: 'Paradas',
      foreignKey: 'linhas_id',
      as: 'veiculo',
    });

  }

}

module.exports = Linhas;