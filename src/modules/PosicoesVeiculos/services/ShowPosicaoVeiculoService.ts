import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PosicaoVeiculo from '../typeorm/entities/PosicaoVeiculo';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

interface IRequest {
  id: string;
}

class ShowPosicaoVeiculoService {
  public async execute({ id }: IRequest): Promise<PosicaoVeiculo | undefined> {
    const posicaoVeiculoRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );

    const posicaoVeiculo = await posicaoVeiculoRepository.findOne(id);

    if (!posicaoVeiculo) {
      throw new AppError('Posição de veículo não encontrado');
    }

    return posicaoVeiculo;
  }
}

export default ShowPosicaoVeiculoService;
