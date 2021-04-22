const express = require('express');

const BusLineController = require('./controllers/BusLineController');
const BusStopController = require('./controllers/BusStopController');
const MethodsController = require('./controllers/MethodsController');
const VehicleController = require('./controllers/VehicleController');
const VehiclePosController = require('./controllers/VehiclePosController');

const routes = express.Router();

//CRUD das Paradas
routes.post('/stopcreate',BusStopController.create);
routes.get('/stoplist',BusStopController.list);
routes.get('/stopdetail:id',BusStopController.detail);
routes.put('/stopupdate:id',BusStopController.update);
routes.put('/stopdelete:id',BusStopController.delete);

//CRUD das Linhas
routes.post('/linecreate',BusLineController.create);
routes.get('/linelist',BusLineController.list);
routes.get('/linedetail:id',BusLineController.detail);
routes.put('/lineupdate:id',BusLineController.update);
routes.put('/linedelete:id',BusLineController.delete);

//CRUD dos Veículos
routes.post('/lines/:line_id/vehiclecreate',VehicleController.create);
routes.get('/vehiclelist',VehicleController.list);
routes.get('/vehicledetail:id',VehicleController.detail);
routes.put('/vehicleupdate:id',VehicleController.update);
routes.put('/vehicledelete:id',VehicleController.delete);

//CRUD das Posições dos Veículos
routes.post('/vehicles/:vehicle_id/positioncreate',VehiclePosController.create);
routes.get('/positionlist',VehiclePosController.list);
routes.get('/positiondetail:id',VehiclePosController.detail);
routes.put('/positionupdate:id',VehiclePosController.update);
routes.put('/positiondelete:id',VehiclePosController.delete);

//MÉTODOS
routes.get('/lines/:line_id/vehicles',MethodsController.vehiclesPerLine);
routes.get('/stops/:stop_id/lines',MethodsController.linesPerStop);

module.exports = routes;