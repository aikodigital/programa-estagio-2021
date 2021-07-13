const sequelize = require('../database/db').sequelize
const Sequelize = require('../database/db').Sequelize
const veiculo = require('./Veiculo')
const PosicaoVeiculo = sequelize.define('Posicao_Veiculos',{
    latitude:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    longitude:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});
//Gerando a Foreign Key de veiculos, no model PosicaoVeiculo
veiculo.hasOne(PosicaoVeiculo)
PosicaoVeiculo.belongsTo(veiculo)
//Gerando table, se ela não existir
//PosicaoVeiculo.sync()
module.exports = PosicaoVeiculo