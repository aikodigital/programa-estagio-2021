import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';
import Parada from '../typeorm/entities/Parada';
interface IRequest {
  id: string;
}

class ShowParadaService {
  public async execute({ id }: IRequest): Promise<Parada | undefined> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const parada = await paradasRepository.findOne(id);

    if (!parada) {
      throw new AppError('Parada não encontrado');
    }

    return parada;
  }
}

export default ShowParadaService;
