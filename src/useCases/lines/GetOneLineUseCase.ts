import ILineRepository from "../../repositories/lines/ILineRepository";
import IGetOneLineRequestDTO from "../../dtos/lines/GetOneLineDTO";
import Line from "../../entities/Line";

export default class GetOneStopUseCase {
  constructor(private lineRepository: ILineRepository) {}

  async execute(line: IGetOneLineRequestDTO): Promise<Line> {
    const lines = await this.lineRepository.findById(line.id);
    return lines;
  }
}
