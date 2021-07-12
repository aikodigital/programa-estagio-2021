require('dotenv').config();
const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

const busStopRouter = require('../entities/bus-stop/controllers');
app.use('/bus-stops', busStopRouter);

const busLineRouter = require('../entities/bus-line/controllers');
app.use('/bus-lines', busLineRouter);

const vehicleRouter = require('../entities/vehicle/controllers/vehicle');
app.use('/vehicles', vehicleRouter);

const positionRouter = require('../entities/vehicle/controllers/position');
app.use('/positions', positionRouter);

const errorHandler = require('../middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;
