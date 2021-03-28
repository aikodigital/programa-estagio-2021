import IVehicleRepository from "../../repositories/vehicles/IVehicleRepository";

export default class GetAllVehiclessUseCase {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async execute() {
    const stops = await this.vehicleRepository.findAll();
    return stops;
  }
}
