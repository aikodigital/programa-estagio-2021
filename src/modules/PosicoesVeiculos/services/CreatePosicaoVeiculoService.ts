import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PosicaoVeiculo from '../typeorm/entities/PosicaoVeiculo';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

interface IRequest {
  latitude: number;
  longitude: number;
  veiculoId: string;
}

class CreatePosicaoVeiculoService {
  public async execute({
    latitude,
    longitude,
    veiculoId,
  }: IRequest): Promise<PosicaoVeiculo> {
    const posicaoVeiculosRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );
    const veiculoIdExists = await posicaoVeiculosRepository.findByPk(veiculoId);

    if (!veiculoIdExists) {
      throw new AppError('Veiculo não encontrado');
    }
    const posicaoVeiculoExists = await posicaoVeiculosRepository.findOne({
      latitude,
      longitude,
    });

    if (posicaoVeiculoExists) {
      throw new AppError('Já existe um veiculo nesta posição');
    }
    const posicaoVeiculo = posicaoVeiculosRepository.create({
      latitude,
      longitude,
    });

    await posicaoVeiculosRepository.save(posicaoVeiculo);
    return posicaoVeiculo;
  }
}

export default CreatePosicaoVeiculoService;
