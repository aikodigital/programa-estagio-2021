import IGetOneVehiclePositionRequestDTO from "../../dtos/vehiclePositions/GetOneVehiclePositionDTO";
import VehiclePosition from "../../entities/VehiclePosition";
import IVehiclePositionRepository from "../../repositories/vehiclePositions/IVehiclePositionsRepository";

export default class GetOneVehiclePositionUseCase {
  constructor(private vehiclePositionRepository: IVehiclePositionRepository) {}

  async execute(
    position: IGetOneVehiclePositionRequestDTO
  ): Promise<VehiclePosition> {
    const vehiclePosition = await this.vehiclePositionRepository.findById(
      position.vehicleId
    );
    return vehiclePosition;
  }
}
