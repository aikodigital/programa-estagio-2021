const sequelize = require('../../../database');
const {DataTypes} = require('sequelize');

const VehiclePos = sequelize.define('VehiclePos', {
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = VehiclePos;
