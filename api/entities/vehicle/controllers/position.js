const router = require('express').Router();
const requestFilter = require('../../../middlewares/request-filter');
const VehicleService = require('../services');

// Post position
router.post(
  '/',
  requestFilter('body', ['latitude', 'longitude']),
  async (req, res, next) => {
    try {
      const position = req.body;
      const createdPosition = await VehicleService.createPosition(position);
      res.status(201).json(createdPosition);
    } catch (error) {
      next(error);
    }
  },
);

// Get all positions
router.get('/', async (req, res, next) => {
  try {
    const positions = await VehicleService.getAllPositions();
    res.status(200).json(positions);
  } catch (error) {
    next(error);
  }
});

// Get position by ID
router.get('/:id', async (req, res, next) => {
  try {
    const positionID = req.params.id;
    const position = await VehicleService.getPositionByID(positionID);
    res.status(200).json(position);
  } catch (error) {
    next(error);
  }
});

// Update position by ID
router.put(
  '/:id',
  requestFilter('body', ['latitude', 'longitude']),
  async (req, res, next) => {
    try {
      const positionID = req.params.id;
      const position = req.body;
      const updatedPostition = await VehicleService.updatePosition(
        positionID,
        position,
      );
      res.status(200).json(updatedPostition);
    } catch (error) {
      next(error);
    }
  },
);

// Delete position by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const positionID = req.params.id;
    await VehicleService.deletePosition(positionID);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
