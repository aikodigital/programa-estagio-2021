const sequelize = require('../database/db').sequelize
const Sequelize = require('../database/db').Sequelize
const parada = require('./Parada')
const linha = require('./Linha')
const ParadaLinhas = sequelize.define('ParadaLinhas',{});
parada.belongsToMany(linha, {
    as: 'linhas',
    through: ParadaLinhas,
    foreignKey: 'ParadaId',
    otherKey: 'LinhaId',
  });
linha.belongsToMany(parada, {
    as: 'Paradas',
    through: ParadaLinhas,
    foreignKey: 'LinhaId',
    otherKey: 'Paradaid',
  });
  ParadaLinhas.sync()