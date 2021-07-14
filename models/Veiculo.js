const sequelize = require('../database/db').sequelize
const Sequelize = require('../database/db').Sequelize
const linha = require('./Linha')
const veiculo = sequelize.define('Veiculos',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

linha.hasMany(veiculo)
veiculo.belongsTo(linha)
//veiculo.sync()
module.exports = veiculo