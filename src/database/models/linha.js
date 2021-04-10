const {  DataTypes } = require("sequelize");
const {sequelize} = require('../connection')
const Parada = require("./parada")
const Linha = sequelize.define("Linhas", {
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    }
});
module.exports= Linha