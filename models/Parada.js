const sequelize = require('../database/db').sequelize
const Sequelize = require('../database/db').Sequelize

const Parada = sequelize.define('Paradas',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    longitude:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

Parada.sync()
module.exports = Parada