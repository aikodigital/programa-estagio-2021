import CreateVehicleUseCase from "./CreateVehicleUseCase";
import GetAllVehiclesUseCase from "./GetAllVehiclesUseCase";
import GetOneVehicleUseCase from "./GetOneVehicleUseCase";
import UpdateVehicleUseCase from "./UpdateVehicleUseCase";
import DeleteVehicleUseCase from "./DeleteVehicleUseCase";

import VehicleRepositoryPostgres from "../../repositories/vehicles/implementations/VehicleRepositoryPostgres";

const vehicleRepositoryPostgres = new VehicleRepositoryPostgres();

const createVehicleUseCase = new CreateVehicleUseCase(
  vehicleRepositoryPostgres
);
const getAllVehiclesUseCase = new GetAllVehiclesUseCase(
  vehicleRepositoryPostgres
);
const getOneVehicleUseCase = new GetOneVehicleUseCase(
  vehicleRepositoryPostgres
);
const updateVehicleUseCase = new UpdateVehicleUseCase(
  vehicleRepositoryPostgres
);
const deleteVehicleUseCase = new DeleteVehicleUseCase(
  vehicleRepositoryPostgres
);

export {
  createVehicleUseCase,
  getAllVehiclesUseCase,
  getOneVehicleUseCase,
  updateVehicleUseCase,
  deleteVehicleUseCase,
};
