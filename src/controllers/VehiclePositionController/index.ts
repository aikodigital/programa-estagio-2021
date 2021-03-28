import VehiclePositionController from "./VehiclePositionController";
import {
  createVehiclePositionUseCase,
  getAllVehiclesPositionsUseCase,
  getOneVehiclePositionUseCase,
  updateVehiclePositionUseCase,
  deleteVehiclePositionUseCase,
} from "../../useCases/vehiclePositions";

const vehiclePositionController = new VehiclePositionController(
  createVehiclePositionUseCase,
  getAllVehiclesPositionsUseCase,
  getOneVehiclePositionUseCase,
  updateVehiclePositionUseCase,
  deleteVehiclePositionUseCase
);
export default vehiclePositionController;
