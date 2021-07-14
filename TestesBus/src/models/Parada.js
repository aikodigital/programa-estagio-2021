const {Sequelize, Model} = require("sequelize");
 
class Parada extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        latitude: Sequelize.INTEGER(100),
        longitude: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName: "Paradas",
      }
    );
 
    return this;
  }

  static associate(models){
 
    this.hasMany(models.Linhas, {
        //through: 'linhas',
        foreignKey: 'paradasid',
        as: 'linha',
    });
 
  }

}
 
module.exports = Parada;