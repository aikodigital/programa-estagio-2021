import IVehiclePositionRepository from "../../repositories/vehiclePositions/IVehiclePositionsRepository";
import IUpdateVehiclePositionRequestDTO from "../../dtos/vehiclePositions/UpdateVehiclePositionDTO";
import VehiclePosition from "../../entities/VehiclePosition";

export default class UpdateVehiclePositionUseCase {
  constructor(private vehiclePositionRepository: IVehiclePositionRepository) {}

  async execute(data: IUpdateVehiclePositionRequestDTO) {
    const vehiclePosition = new VehiclePosition();
    vehiclePosition.vehicleId = data.vehicleId;
    vehiclePosition.latitude = data.latitude;
    vehiclePosition.longitude = data.longitude;
    return this.vehiclePositionRepository.update(vehiclePosition);
  }
}
