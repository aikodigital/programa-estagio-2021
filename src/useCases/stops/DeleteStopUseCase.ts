import IStopRepository from "../../repositories/stops/IStopRepository";
import IGetOneStopRequestDTO from "../../dtos/stops/GetOneStopsDTO";

export default class DeleteStopUseCase {
  constructor(private stopRepository: IStopRepository) {}

  async execute(stop: IGetOneStopRequestDTO): Promise<void> {
    await this.stopRepository.delete(stop.id);
  }
}
