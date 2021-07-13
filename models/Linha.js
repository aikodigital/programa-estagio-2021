const sequelize = require('../database/db').sequelize
const Sequelize = require('../database/db').Sequelize

//Gerando Tabela no DB
const linha = sequelize.define('linhas',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
//linha.sync()
module.exports = linha