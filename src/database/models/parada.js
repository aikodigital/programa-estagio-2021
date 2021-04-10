const {  DataTypes } = require("sequelize");
const {sequelize} = require('../connection')
const Parada = sequelize.define("Paradas", {
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    latitude:{
        type:DataTypes.FLOAT,
    },
    longitude:{
        type:DataTypes.FLOAT,
    }
});

module.exports= Parada