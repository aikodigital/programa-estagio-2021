const router = require('express').Router();
const requestFilter = require('../../../middlewares/request-filter');
const BusStopService = require('../services');

// Post bus-stop
router.post(
  '/',
  requestFilter('body', ['name', 'latitude', 'longitude']),
  async (req, res, next) => {
    try {
      const busStop = req.body;
      const createdBusStop = await BusStopService.create(busStop);
      res.status(201).json(createdBusStop);
    } catch (error) {
      next(error);
    }
  },
);

// Get lines by bus stop
router.get('/lines/:id', async (req, res, next) => {
  try {
    const busStopsID = req.params.id;
    const busStop = await BusStopService.getByID(busStopsID);
    const busLines = await busStop.getBusLines();
    res.status(200).json(busLines);
  } catch (error) {
    next(error);
  }
});

// Get all bus stops
router.get('/', async (req, res, next) => {
  try {
    const busStops = await BusStopService.getAll();
    res.status(200).json(busStops);
  } catch (error) {
    next(error);
  }
});

// Get bus stop by ID
router.get('/:id', async (req, res, next) => {
  try {
    const busStopID = req.params.id;
    const busStop = await BusStopService.getByID(busStopID);
    res.status(200).json(busStop);
  } catch (error) {
    next(error);
  }
});

// Update bus stop by ID
router.put(
  '/:id',
  requestFilter('body', ['name', 'latitude', 'longitude']),
  async (req, res, next) => {
    try {
      const busStopID = req.params.id;
      const busStop = req.body;
      const updatedBusStop = await BusStopService.update(busStopID, busStop);
      res.status(200).json(updatedBusStop);
    } catch (error) {
      next(error);
    }
  },
);

// Delete bus stop by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const busStopID = req.params.id;
    await BusStopService.delete(busStopID);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
