const {  DataTypes } = require("sequelize");
const {sequelize} = require('../connection')
const Posicao = sequelize.define("Posicoes", {
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    paradas:{
        type:DataTypes.INTEGER,
    }
});

module.exports= Posicao