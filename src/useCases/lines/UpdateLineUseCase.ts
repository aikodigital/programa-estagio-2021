import IUpdateLineRequestDTO from "../../dtos/lines/UpdateLineDTO";
import ILineRepository from "../../repositories/lines/ILineRepository";
import Line from "../../entities/Line";

export default class UpdateStopUseCase {
  constructor(private lineRepository: ILineRepository) {}

  async execute(data: IUpdateLineRequestDTO) {
    const line = new Line();
    line.id = data.id;
    line.name = data.name;
    return this.lineRepository.update(line);
  }
}
