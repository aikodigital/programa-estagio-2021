import Line from "../../entities/Line";
import IVehicleByLineRepository from "../../repositories/vehiclesByLines/IVehiclesByLineRepository";
import IGetVehiclesByLineRequestDTO from "../../dtos/vehiclesByLine/GetVehiclesByLineDTO";

export default class GetVehiclesByLineUseCase {
  constructor(private vehicleByLineRepository: IVehicleByLineRepository) {}

  async execute(data: IGetVehiclesByLineRequestDTO): Promise<Array<Line>> {
    const vehicles = await this.vehicleByLineRepository.getVehiclesByLine(
      data.lineId
    );
    return vehicles;
  }
}
