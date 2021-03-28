import IStopsByPositionRepository from "../../repositories/stopsByPosition/IStopsByPositionRepository";
import IGetStopsByPositionRequestDTO from "../../dtos/stopsByPosition/GetStopsByPositionDTO";
import Stop from "../../entities/Stop";

export default class GetStopsByPositionUseCase {
  constructor(private stopsByPositionRepository: IStopsByPositionRepository) {}

  async execute(data: IGetStopsByPositionRequestDTO): Promise<Array<Stop>> {
    const stops = await this.stopsByPositionRepository.getStopsByPosition(
      data.latitude,
      data.longitude
    );

    return stops;
  }
}
