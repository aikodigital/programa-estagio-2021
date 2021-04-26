import { getCustomRepository } from 'typeorm';
import Linha from '../typeorm/entities/Linha';
import { LinhaRepository } from '../typeorm/repositories/LinhaRepository';

class ListLinhaService {
  public async execute(): Promise<Linha[]> {
    const LinhasRepository = getCustomRepository(LinhaRepository);

    const linhas = await LinhasRepository.find();

    return linhas;
  }
}

export default ListLinhaService;
