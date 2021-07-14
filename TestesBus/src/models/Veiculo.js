const { Sequelize, Model } = require("sequelize");
 
class Veiculo extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        modelo: Sequelize.STRING(100)
      },
      {
        sequelize,
        tableName: 'Veiculos',
      }
    );
 
    return this;
  }

  static associate(models){
 
    this.belongsTo(models.Linhas, {
        
        foreignKey: 'linhas_id',
        as: 'linha',
    });
 
  }
}
 
module.exports = Veiculo;