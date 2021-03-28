import ILineRepository from "../../repositories/lines/ILineRepository";
import ICreateLineRequestDTO from "../../dtos/lines/CreateLineDTO";
import Line from "../../entities/Line";

export default class CreateLineUseCase {
  constructor(private lineRepository: ILineRepository) {}

  async execute(data: ICreateLineRequestDTO): Promise<Line> {
    const line = new Line();
    line.name = data.name;
    return this.lineRepository.save(line, data.stops);
  }
}
