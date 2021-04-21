import { getCustomRepository } from 'typeorm';
import Parada from '../typeorm/entities/Parada';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';

class ListParadaService {
  public async execute(): Promise<Parada[]> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const paradas = await paradasRepository.find();

    return paradas;
  }
}

export default ListParadaService;
