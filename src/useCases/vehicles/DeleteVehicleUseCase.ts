import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";
import { IGetOneVehicleRequestDTO } from "../../dtos/vehicles/GetOneVehicleDTO";

export default class DeleteVehicleUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute(vehicle: IGetOneVehicleRequestDTO): Promise<void> {
    await this.vehicleRepository.delete(vehicle.id);
  }
}
