import ILineRepository from "../../repositories/lines/ILineRepository";
import IGetOneLineRequestDTO from "../../dtos/lines/GetOneLineDTO";

export default class DeleteStopUseCase {
  constructor(private lineRepository: ILineRepository) {}

  async execute(line: IGetOneLineRequestDTO): Promise<void> {
    await this.lineRepository.delete(line.id);
  }
}
