import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Parada from '../typeorm/entities/Parada';
import ParadaRepository from '../typeorm/repositories/ParadaRepository';

interface IRequest {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

class UpdateParadaService {
  public async execute({
    id,
    name,
    latitude,
    longitude,
  }: IRequest): Promise<Parada> {
    const paradasRepository = getCustomRepository(ParadaRepository);

    const parada = await paradasRepository.findOne(id);

    if (!parada) {
      throw new AppError('Parada não encontrada');
    }
    const paradaExists = await paradasRepository.findyByName(name);

    if (paradaExists) {
      throw new AppError('Já existe uma parada com este nome');
    }

    parada.name = name;
    parada.latitude = latitude;
    parada.longitude = longitude;

    await paradasRepository.save(parada);

    return parada;
  }
}

export default UpdateParadaService;
