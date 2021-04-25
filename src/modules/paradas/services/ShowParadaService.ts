import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';
import Parada from '../typeorm/entities/Parada';
interface IRequest {
  id: string;
}

class ShowParadaService {
  public async execute({ id }: IRequest): Promise<Parada> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const parada = await paradasRepository.findOne(id);

    if (!parada) {
      throw new AppError('Parada não encontrado');
    }

    return parada;
  }
  public async buscaLinhas({ id }: IRequest): Promise<Parada> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const parada = await paradasRepository.findOne(id, {
      relations: ['linha'],
    });

    if (!parada) {
      throw new AppError('Parada não encontrada');
    }

    return parada;
  }
}

export default ShowParadaService;
