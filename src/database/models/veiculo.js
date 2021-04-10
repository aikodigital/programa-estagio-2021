const {  DataTypes } = require("sequelize");
const {sequelize} = require('../connection')
const Veiculo = sequelize.define("Veiculos", {
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    paradas:{
        type:DataTypes.INTEGER,
    }
});

module.exports= Veiculo