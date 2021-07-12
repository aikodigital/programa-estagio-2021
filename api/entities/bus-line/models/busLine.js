const sequelize = require('../../../database');
const {DataTypes} = require('sequelize');

const BusLine = sequelize.define('busLine', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = BusLine;
