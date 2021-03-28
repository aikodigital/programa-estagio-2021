import IGetOneStopRequestDTO from "../../dtos/stops/GetOneStopsDTO";
import IStopRepository from "../../repositories/stops/IStopRepository";
import Stop from "../../entities/Stop";

export default class GetOneStopUseCase {
  constructor(private stopRepository: IStopRepository) {}

  async execute(stop: IGetOneStopRequestDTO): Promise<Stop> {
    const stops = await this.stopRepository.findById(stop.id);
    return stops;
  }
}
