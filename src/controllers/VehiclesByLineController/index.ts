import VehiclesByLineController from "./VehiclesByLineController";
import { getVehiclesByLineUseCase } from "../../useCases/vehiclesByLine";
import { getOneLineUseCase } from "../../useCases/lines";

const vehiclesByLineController = new VehiclesByLineController(
  getVehiclesByLineUseCase,
  getOneLineUseCase
);

export default vehiclesByLineController;
