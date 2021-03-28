import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import { IGetOneVehicleRequestDTO } from "../../dtos/vehicles/GetOneVehicleDTO";
import Vehicle from "../../entities/Vehicle";

export default class GetOneVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(vehicle: IGetOneVehicleRequestDTO): Promise<Vehicle> {
    const stops = await this.vehicleRepository.findById(vehicle.id);
    return stops;
  }
}
