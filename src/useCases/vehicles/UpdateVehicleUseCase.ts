import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import IUpdateVehicleRequestDTO from "../../dtos/vehicles/UpdateVehicleDTO";
import Vehicle from "../../entities/Vehicle";

export default class UpdateVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(data: IUpdateVehicleRequestDTO) {
    const vehicle = new Vehicle();
    vehicle.lineId = data.lineId;
    vehicle.id = data.id;
    vehicle.model = data.model;
    vehicle.name = data.name;
    return this.vehicleRepository.update(vehicle);
  }
}
