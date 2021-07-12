const router = require('express').Router();
const requestFilter = require('../../../middlewares/request-filter');
const BusLineService = require('../services');
const BusStopService = require('../../bus-stop/services');
const VehicleService = require('../../vehicle/services');

// Post bus line
router.post('/', requestFilter('body', ['name']), async (req, res, next) => {
  try {
    const busLine = req.body;
    const createdBusLine = await BusLineService.create(busLine);
    res.status(201).json(createdBusLine);
  } catch (error) {
    next(error);
  }
});

// Add a bus stop to line
router.post(
  '/addStop/:id',
  requestFilter('body', ['busStopID'], true),
  async (req, res, next) => {
    try {
      const {busStopID} = req.body;
      const busLineID = req.params.id;
      const busStop = await BusStopService.getByID(busStopID);
      const busLine = await BusLineService.getByID(busLineID);
      await busLine.addBusStop(busStop);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/addVehicle/:id',
  requestFilter('body', ['vehicleID'], true),
  async (req, res, next) => {
    try {
      const busLineID = req.params.id;
      const {vehicleID} = req.body;
      const busLine = await BusLineService.getByID(busLineID);
      const vehicle = await VehicleService.getByID(vehicleID);
      vehicle.setBusLine(busLine);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
);

// Get vehicles by bus lines
router.get('/vehicles/:id', async (req, res, next) => {
  try {
    const busLineID = req.params.id;
    const busLine = await BusLineService.getByID(busLineID);
    const vehicles = await busLine.getVehicles();
    res.status(200).json(vehicles);
  } catch (error) {
    next(error);
  }
});

// Get all bus lines
router.get('/', async (req, res, next) => {
  try {
    const busLines = await BusLineService.getAll();
    res.status(200).json(busLines);
  } catch (error) {
    next(error);
  }
});

// Get bus line by ID
router.get('/:id', async (req, res, next) => {
  try {
    const busLineID = req.params.id;
    const busLine = await BusLineService.getByID(busLineID);
    res.status(200).json(busLine);
  } catch (error) {
    next(error);
  }
});

// Update bus line by ID
router.put('/:id', requestFilter('body', ['name']), async (req, res, next) => {
  try {
    const busLineID = req.params.id;
    const busLine = req.body;
    const updatedBusLine = await BusLineService.update(busLineID, busLine);
    res.status(200).json(updatedBusLine);
  } catch (error) {
    next(error);
  }
});

// Delete bus line by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const busLineID = req.params.id;
    await BusLineService.delete(busLineID);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
