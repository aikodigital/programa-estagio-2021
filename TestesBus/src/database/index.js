const Sequelize = require('sequelize');
const databaseCnfig = require('../config/database');
const Parada = require('../models/Parada');
const Linha = require('../models/Linhas');
const Veiculo = require('../models/Veiculo');
const models = [Parada,Linha, Veiculo];

class Database {
  constructor(){
      this.init();
  }

  init(){
    this.connection = new Sequelize(databaseCnfig);
    models.map((model) => model.init(this.connection))
      .map((model) => {
          if(model.associate) model.associate(this.connection.models);
          return model;
      })
  }
}

module.exports = new Database();