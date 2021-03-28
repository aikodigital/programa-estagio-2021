import Line from "../../entities/Line";
import ILinesByStopRepository from "../../repositories/linesByStops/ILinesByStopsRepository";
import IGetLinesByStopRequestDTO from "../../dtos/linesByStop/GetLinesByStopDTO";

export default class GetLinesByStopUseCase {
  constructor(private linesByStopRepository: ILinesByStopRepository) {}

  async execute(data: IGetLinesByStopRequestDTO): Promise<Array<Line>> {
    const lines = await this.linesByStopRepository.getLinesPerStopRepository(
      data.stopId
    );
    return lines;
  }
}
