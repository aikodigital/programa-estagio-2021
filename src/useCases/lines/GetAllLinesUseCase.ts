import ILineRepository from "../../repositories/lines/ILineRepository";

export default class GetAllLinesUseCase {
  constructor(private lineRepository: ILineRepository) {}

  async execute() {
    const lines = await this.lineRepository.fildAll();
    return lines;
  }
}
