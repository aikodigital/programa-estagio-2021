import express from 'express';

import StopController from './controllers/StopController';
import LineController from './controllers/LineController';
import VehicleController from './controllers/VehicleController';

const routes = express.Router();

const stopController = new StopController();
const lineController = new LineController();
const vehicleController = new VehicleController();

// StopController
routes.post('/stop', stopController.create);
routes.get('/stop/', stopController.index);
routes.get('/stop/:id', stopController.show);
routes.delete('/stop/:id', stopController.delete);
routes.put('/stop/:id', stopController.update);

// LineController
routes.post('/line', lineController.create);
routes.get('/line', lineController.index);
routes.get('/line/:id', lineController.show);
routes.delete('/line/:id', lineController.delete);
routes.put('/line/:id', lineController.update);
routes.get('/linestop/:id', lineController.linhasPorParada);

//VehicleController
routes.post('/vehicle', vehicleController.create);
routes.get('/vehicle', vehicleController.index);
routes.get('/vehicle/:id', vehicleController.show);
routes.delete('/vehicle/:id', vehicleController.delete);
routes.put('/vehicle/:id', vehicleController.update);
routes.get('/vehicleline/:id', vehicleController.veiculosPorLinha);

export default routes;