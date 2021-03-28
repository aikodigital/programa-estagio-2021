import GetVehiclesByLineUseCase from "./GetVehiclesByLineUseCase";
import VehicleByLineRepositoryPostgres from "../../repositories/vehiclesByLines/implementation/VehicleByLineRepositoryPostgres";

const vehicleByLineRepositoryPostgres = new VehicleByLineRepositoryPostgres();

const getVehiclesByLineUseCase = new GetVehiclesByLineUseCase(
  vehicleByLineRepositoryPostgres
);

export { getVehiclesByLineUseCase };
