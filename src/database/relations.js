const Linha_relation_Parada = require("./models/linhaparada")
const Linha = require("./models/linha")
const Parada = require("./models/parada")
const Veiculo = require("./models/veiculo")
const Posicao = require("./models/posicao")

Linha.belongsToMany(Parada, { through: Linha_relation_Parada });
Parada.belongsToMany(Linha, { through: Linha_relation_Parada });
Linha.hasMany(Veiculo)
Veiculo.belongsTo(Linha)
Veiculo.hasMany(Posicao)
Posicao.belongsTo(Veiculo)