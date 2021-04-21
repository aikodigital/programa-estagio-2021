import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Linha from '../typeorm/entities/Linha';
import { LinhaRepository } from '../typeorm/repositories/LinhaRepository';

interface IRequest {
  id: string;
  name: string;
}

class UpdateLinhaService {
  public async execute({ id, name }: IRequest): Promise<Linha> {
    const linhaRepository = getCustomRepository(LinhaRepository);

    const linha = await linhaRepository.findOne(id);

    if (!linha) {
      throw new AppError('Linha não encontrada');
    }
    const linhaExists = await linhaRepository.findByName(name);

    if (linhaExists) {
      throw new AppError('Já existe uma linha com este nome');
    }

    linha.name = name;

    await linhaRepository.save(linha);

    return linha;
  }
}

export default UpdateLinhaService;
