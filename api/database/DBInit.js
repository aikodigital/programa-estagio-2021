const sequelize = require('../database');
const BusLine = require('../entities/bus-line/models/busLine');
const BusStop = require('../entities/bus-stop/models/busStop');
const Vehicle = require('../entities/vehicle/models/vehicle');
const VehiclePos = require('../entities/vehicle/models/vehiclePos');

// Many-to-many relation
BusLine.belongsToMany(BusStop, {through: 'LineStop'});
BusStop.belongsToMany(BusLine, {through: 'LineStop'});

// Vehicle - line relation
Vehicle.belongsTo(BusLine);
BusLine.hasMany(Vehicle, {
  onDelete: 'cascade',
  onUpdate: 'cascade',
  hooks: true,
});

// Vehicle - VehiclePos relation
VehiclePos.belongsTo(Vehicle);
Vehicle.hasOne(VehiclePos);

// Sync everything with the database
sequelize
  .sync({alter: false})
  .then(() => {
    console.log('Tables (re)created');
  })
  .catch((err) => console.log(err));

module.exports = {
  BusLine,
  BusStop,
  Vehicle,
  VehiclePos,
};
