import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import 'express-async-errors';
import Linha from '../typeorm/entities/Linha';
import { LinhaRepository } from '../typeorm/repositories/LinhaRepository';
interface IRequest {
  id: string;
}

class ShowLinhaService {
  public async execute({ id }: IRequest): Promise<Linha> {
    const linhaRepository = getCustomRepository(LinhaRepository);

    const linha = await linhaRepository.findOne(id);

    if (!linha) {
      throw new AppError('Linha não encontrada');
    }

    return linha;
  }
}

export default ShowLinhaService;
