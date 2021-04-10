const {  DataTypes } = require("sequelize");
const {sequelize} = require('../connection')
LinhaParada = sequelize.define('Linha_relation_Parada', {
    role: DataTypes.STRING
});
module.exports= LinhaParada