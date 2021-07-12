const {Sequelize} = require('sequelize');

// - You gotta have mysql server installed, if you don't have download and
// install it,
// - Assuming you have mysql server installed start it and connect to it trough
// your mysql workbench.
// - There make the following querry: <CREATE TABLE "aiko-intern">
// - Great, everythin should be working right now.

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '-03:00',
  },
);

module.exports = sequelize;
