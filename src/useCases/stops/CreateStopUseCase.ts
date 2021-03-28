import IStopRepository from "../../repositories/stops/IStopRepository";
import ICreateStopRquestDTO from "../../dtos/stops/CreateStopDTO";
import Stop from "../../entities/Stop";

export default class CreateStopUseCase {
  constructor(private stopRepository: IStopRepository) {}

  async execute(data: ICreateStopRquestDTO) {
    const stop = new Stop();

    stop.name = data.name;
    stop.latitude = data.latitude;
    stop.longitude = data.longitude;

    return this.stopRepository.save(stop, data.lines);
  }
}
