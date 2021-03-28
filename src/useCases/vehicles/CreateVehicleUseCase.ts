import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import ICreateVehicleRequestDTO from "../../dtos/vehicles/CreateVehicleDTO";
import Vehicle from "../../entities/Vehicle";

export default class CreateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: ICreateVehicleRequestDTO) {
    const vehicle = new Vehicle();
    vehicle.lineId = data.lineId;
    vehicle.model = data.model;
    vehicle.name = data.name;
    return this.vehicleRepository.save(vehicle);
  }
}
