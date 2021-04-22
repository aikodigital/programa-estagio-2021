const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const BusStop = require('../models/BusStopModel');
const BusLine = require('../models/BusLineModel');
const Vehicle = require('../models/VehicleModel');
const VehiclePos = require('../models/VehiclePosModel');

const connection = new Sequelize(dbConfig);

BusStop.init(connection);
BusLine.init(connection);
Vehicle.init(connection);
VehiclePos.init(connection);


BusLine.associate(connection.models);
Vehicle.associate(connection.models);
VehiclePos.associate(connection.models);

module.exports = connection;