import VehicleController from "./VehicleController";
import {
  createVehicleUseCase,
  getAllVehiclesUseCase,
  getOneVehicleUseCase,
  updateVehicleUseCase,
  deleteVehicleUseCase,
} from "../../useCases/vehicles";

const vehicleController = new VehicleController(
  createVehicleUseCase,
  getAllVehiclesUseCase,
  getOneVehicleUseCase,
  updateVehicleUseCase,
  deleteVehicleUseCase
);
export default vehicleController;
