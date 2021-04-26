import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { LinhaRepository } from '../typeorm/repositories/LinhaRepository';

interface IRequest {
  id: string;
}

class DeleteLinhaService {
  public async execute({ id }: IRequest): Promise<void> {
    const linhaRepository = getCustomRepository(LinhaRepository);

    const linha = await linhaRepository.findOne(id);

    if (!linha) {
      throw new AppError('Linha não encontrada');
    }

    await linhaRepository.remove(linha);
  }
}

export default DeleteLinhaService;
