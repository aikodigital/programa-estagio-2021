import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';

interface IRequest {
  id: string;
}

class DeleteParadaService {
  public async execute({ id }: IRequest): Promise<void> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const parada = await paradasRepository.findOne(id);

    if (!parada) {
      throw new AppError('Parada não encontrado');
    }

    await paradasRepository.remove(parada);
  }
}

export default DeleteParadaService;
