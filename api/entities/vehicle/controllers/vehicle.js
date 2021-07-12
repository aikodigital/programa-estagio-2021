const router = require('express').Router();
const requestFilter = require('../../../middlewares/request-filter');
const VehicleService = require('../services');

// Post vehicle
router.post(
  '/',
  requestFilter('body', ['name', 'model']),
  async (req, res, next) => {
    try {
      const vehicle = req.body;
      const createdVehicle = await VehicleService.create(vehicle);
      res.status(201).json(createdVehicle);
    } catch (error) {
      next(error);
    }
  },
);

// Set a bus line for a vehicle
router.post(
  '/:id',
  requestFilter('body', ['name', 'model']),
  async (req, res, next) => {
    try {
      const vehicleID = req.params.id;
      const busLine = req.body;
      const vehicle = await VehicleService.getByID(vehicleID);
      vehicle.setBusLine(busLine);
      res.status(204);
    } catch (error) {
      next(error);
    }
  },
);

// Post position (connect a position to a vehicle);
router.post(
  '/position/:id',
  requestFilter('body', ['posisionID'], true),
  async (req, res, next) => {
    try {
      const {positionID} = req.body;
      const vehicleID = req.params.id;
      const position = await VehicleService.getPositionByID(positionID);
      const vehicle = await VehicleService.getByID(vehicleID);
      await vehicle.setPosition(position);
      res.status(201).json(vehicle);
    } catch (error) {
      next(error);
    }
  },
);

// Get all vehicles
router.get('/', async (req, res, next) => {
  try {
    const vehicles = await VehicleService.getAll();
    res.status(200).json(vehicles);
  } catch (error) {
    next(error);
  }
});

// Get vehicle by ID
router.get('/:id', async (req, res, next) => {
  try {
    const vehicleID = req.params.id;
    const vehicle = await VehicleService.getByID(vehicleID);
    res.status(200).json(vehicle);
  } catch (error) {
    next(error);
  }
});

// Get vehicle by ID
router.get('/position/:id', async (req, res, next) => {
  try {
    const vehicleID = req.params.id;
    const vehicle = await VehicleService.getByID(vehicleID);
    const position = vehicle.getVehiclePosition();
    res.status(200).json(position);
  } catch (error) {
    next(error);
  }
});

// Update vehicle by ID
router.put(
  '/:id',
  requestFilter('body', ['name', 'model']),
  async (req, res, next) => {
    try {
      const vehicleID = req.params.id;
      const vehicle = req.body;
      const updatedVehicle = await VehicleService.update(vehicleID, vehicle);
      res.status(200).json(updatedVehicle);
    } catch (error) {
      next(error);
    }
  },
);

// Delete vehicle by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const vehicleID = req.params.id;
    await VehicleService.delete(vehicleID);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
