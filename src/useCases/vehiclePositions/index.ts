import CreateVehiclePositionUseCase from "./CreateVehiclePositionUseCase";
import GetAllVehiclesPositionsUseCase from "./GetAllVehiclesPositionsUseCase";
import GetOneVehiclePositionUseCase from "./GetOneVehiclePositionUseCase";
import UpdateVehiclePositionUseCase from "./UpdateVehiclePositionUseCase";
import DeleteVehiclePositionUseCase from "./DeleteVehiclePositionUseCase";

import VehiclePositionRepositoryPostgres from "../../repositories/vehiclePositions/implementations/VehiclePositionsRepositoryPostgres";

const vehiclePositionRepositoryPostgres = new VehiclePositionRepositoryPostgres();

const createVehiclePositionUseCase = new CreateVehiclePositionUseCase(
  vehiclePositionRepositoryPostgres
);
const getAllVehiclesPositionsUseCase = new GetAllVehiclesPositionsUseCase(
  vehiclePositionRepositoryPostgres
);
const getOneVehiclePositionUseCase = new GetOneVehiclePositionUseCase(
  vehiclePositionRepositoryPostgres
);
const updateVehiclePositionUseCase = new UpdateVehiclePositionUseCase(
  vehiclePositionRepositoryPostgres
);
const deleteVehiclePositionUseCase = new DeleteVehiclePositionUseCase(
  vehiclePositionRepositoryPostgres
);

export {
  createVehiclePositionUseCase,
  getAllVehiclesPositionsUseCase,
  getOneVehiclePositionUseCase,
  updateVehiclePositionUseCase,
  deleteVehiclePositionUseCase,
};
