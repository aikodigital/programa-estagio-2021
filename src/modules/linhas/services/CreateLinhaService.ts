import AppError from '@shared/http/errors/AppError';
import { LinhaRepository } from '../typeorm/repositories/LinhaRepository';
import { getCustomRepository } from 'typeorm';
import Linha from '../typeorm/entities/Linha';

interface IRequest {
  name: string;
}

class CreateLinhaService {
  public async execute({ name }: IRequest): Promise<Linha> {
    const linhaRepository = getCustomRepository(LinhaRepository);
    const linhaExists = await linhaRepository.findByName(name);

    if (linhaExists) {
      throw new AppError('Já existe uma linha com este nome');
    }

    const linha = linhaRepository.create({
      name,
    });

    await linhaRepository.save(linha);

    return linha;
  }
}

export default CreateLinhaService;
