import IStopRepository from "../../repositories/stops/IStopRepository";

export default class GetAllStopsUseCase {
  constructor(private stopRepository: IStopRepository) {}

  async execute() {
    const stops = await this.stopRepository.fildAll();
    return stops;
  }
}
