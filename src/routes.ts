import { Router } from "express";
import stopController from "./controllers/StopController";
import lineController from "./controllers/LineController";
import linesByStopController from "./controllers/LinesByStopController";
import vehicleController from "./controllers/VehicleController";
import vehiclePositionController from "./controllers/VehiclePositionController";
import vehiclesByLineController from "./controllers/VehiclesByLineController";
import stopsByPositionController from "./controllers/StopsByPositionController";

const routes = Router();

routes.post("/stops", (request, response) => {
  return stopController.store(request, response);
});
routes.get("/stops", (request, response) => {
  return stopController.getAll(request, response);
});
routes.get("/stops/:stopId", (request, response) => {
  return stopController.getbyId(request, response);
});
routes.put("/stops/:stopId/update", (request, response) => {
  return stopController.update(request, response);
});
routes.delete("/stops/:stopId/delete", (request, response) => {
  return stopController.delete(request, response);
});

routes.post("/lines", (request, response) => {
  return lineController.store(request, response);
});
routes.get("/lines", (request, response) => {
  return lineController.getAll(request, response);
});
routes.get("/lines/:lineId", (request, response) => {
  return lineController.getbyId(request, response);
});
routes.put("/lines/:lineId/update", (request, response) => {
  return lineController.update(request, response);
});
routes.delete("/lines/:lineId/delete", (request, response) => {
  return lineController.delete(request, response);
});

routes.post("/vehicles", (request, response) => {
  return vehicleController.store(request, response);
});
routes.get("/vehicles", (request, response) => {
  return vehicleController.getAll(request, response);
});
routes.get("/vehicles/:vehicleId", (request, response) => {
  return vehicleController.getbyId(request, response);
});
routes.put("/vehicles/:vehicleId/update", (request, response) => {
  return vehicleController.update(request, response);
});
routes.delete("/vehicles/:vehicleId/delete", (request, response) => {
  return vehicleController.delete(request, response);
});

routes.post("/positions", (request, response) => {
  return vehiclePositionController.store(request, response);
});
routes.get("/positions", (request, response) => {
  return vehiclePositionController.getAll(request, response);
});
routes.get("/positions/:vehicleId", (request, response) => {
  return vehiclePositionController.getbyId(request, response);
});
routes.put("/positions/:vehicleId/update", (request, response) => {
  return vehiclePositionController.update(request, response);
});
routes.delete("/positions/:vehicleId/delete", (request, response) => {
  return vehiclePositionController.delete(request, response);
});

routes.get("/stops/:stopId/lines", (request, response) => {
  return linesByStopController.getLinesByStop(request, response);
});
routes.get("/lines/:lineId/vehicles", (request, response) => {
  return vehiclesByLineController.getVehiclesByLine(request, response);
});
routes.get("/nearby", (request, response) => {
  return stopsByPositionController.getNearbyStops(request, response);
});

export default routes;
