const Linha = require('./models/linha');
const Parada = require('./models/parada');
const Veiculo = require('./models/veiculo');
const Posicao = require('./models/posicao');

Linha.belongsToMany(Parada, { as: 'paradas', through: 'LinhaParadas' });
Parada.belongsToMany(Linha, { as: 'linhas', through: 'LinhaParadas' });
Linha.hasMany(Veiculo, { as: 'veiculos' });
Veiculo.belongsTo(Linha);
Veiculo.hasMany(Posicao, { as: 'posicoes', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Posicao.belongsTo(Veiculo);
module.exports = { Linha, Parada, Veiculo, Posicao };