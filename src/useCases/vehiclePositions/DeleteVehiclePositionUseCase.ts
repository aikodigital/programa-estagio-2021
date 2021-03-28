import IVehiclePositionRepository from "../../repositories/vehiclePositions/IVehiclePositionsRepository";
import IGetOneVehiclePositionRequestDTO from "../../dtos/vehiclePositions/GetOneVehiclePositionDTO";

export default class DeleteVehiclePositionUseCase {
  constructor(private vehiclePositionRepository: IVehiclePositionRepository) {}

  async execute(
    vehiclePosition: IGetOneVehiclePositionRequestDTO
  ): Promise<void> {
    await this.vehiclePositionRepository.delete(vehiclePosition.vehicleId);
  }
}
