import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PosicaoVeiculo from '../typeorm/entities/PosicaoVeiculo';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

interface IRequest {
  id: string;
  latitude: number;
  longitude: number;
  veiculoId: string;
}

class UpdatePosicaoVeiculoService {
  public async execute({
    id,
    latitude,
    longitude,
    veiculoId,
  }: IRequest): Promise<PosicaoVeiculo> {
    const posicaoVeiculoRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );

    const posicaoVeiculo = await posicaoVeiculoRepository.findOne(id);

    if (!posicaoVeiculo) {
      throw new AppError('Posição de veiculo não encontrada');
    }
    const posicaoVeiculoExists = await posicaoVeiculoRepository.findOne({
      latitude,
      longitude,
    });

    if (posicaoVeiculoExists) {
      throw new AppError('Já existe um veiculo nesta posição');
    }

    posicaoVeiculo.latitude = latitude;
    posicaoVeiculo.longitude = longitude;
    posicaoVeiculo.veiculoId = veiculoId;

    await posicaoVeiculoRepository.save(posicaoVeiculo);

    return posicaoVeiculo;
  }
}

export default UpdatePosicaoVeiculoService;