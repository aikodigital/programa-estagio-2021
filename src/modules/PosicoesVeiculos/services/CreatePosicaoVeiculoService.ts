import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PosicaoVeiculo from '../typeorm/entities/PosicaoVeiculo';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

interface IRequest {
  latitude: number;
  longitude: number;
  veiculo: Veiculo;
}

class CreatePosicaoVeiculoService {
  public async execute({
    latitude,
    longitude,
    veiculo,
  }: IRequest): Promise<PosicaoVeiculo> {
    const posicaoVeiculosRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );
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
      veiculo,
    });

    await posicaoVeiculosRepository.save(posicaoVeiculo);
    return posicaoVeiculo;
  }
}

export default CreatePosicaoVeiculoService;
