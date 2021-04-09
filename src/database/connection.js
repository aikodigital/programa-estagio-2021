const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/aiko',{logging:false}) // Example for postgres

module.exports={sequelize}