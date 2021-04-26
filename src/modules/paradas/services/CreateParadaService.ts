import Linha from '@modules/linhas/typeorm/entities/Linha';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Parada from '../typeorm/entities/Parada';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  linha: Linha;
}

class CreateParadaService {
  public async execute({
    name,
    latitude,
    longitude,
    linha,
  }: IRequest): Promise<Parada> {
    const paradasRepository = getCustomRepository(ParadaRepository);
    const paradaExists = await paradasRepository.findyByName(name);

    if (paradaExists) {
      throw new AppError('Já existe uma parada com este nome');
    }
    const parada = paradasRepository.create({
      name,
      latitude,
      longitude,
      linha,
    });

    await paradasRepository.save(parada);
    return parada;
  }
}

export default CreateParadaService;
