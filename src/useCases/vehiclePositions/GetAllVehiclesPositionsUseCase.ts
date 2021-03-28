import IVehiclePositionRepository from "../../repositories/vehiclePositions/IVehiclePositionsRepository";

export default class GetAllVehiclesPositionsUseCase {
  constructor(private vehiclePositionRepository: IVehiclePositionRepository) {}

  async execute() {
    const positions = await this.vehiclePositionRepository.findAll();
    return positions;
  }
}
