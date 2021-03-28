import IStopRepository from "../../repositories/stops/IStopRepository";
import Stop from "../../entities/Stop";
import IUpdateStopRequestDTO from "../../dtos/stops/UpdateStopDTO";

export default class UpdateStopUseCase {
  constructor(private stopRepository: IStopRepository) {}

  async execute(data: IUpdateStopRequestDTO) {
    const stop = new Stop();
    stop.name = data.name;
    stop.longitude = data.longitude;
    stop.latitude = data.latitude;
    stop.id = data.id;
    return this.stopRepository.update(stop);
  }
}
