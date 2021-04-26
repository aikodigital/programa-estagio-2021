import { getCustomRepository } from 'typeorm';
import PosicaoVeiculo from '../typeorm/entities/PosicaoVeiculo';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

class ListPosicaoVeiculoService {
  public async execute(): Promise<PosicaoVeiculo[]> {
    const posicaoVeiculosRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );

    const posicaoVeiculos = await posicaoVeiculosRepository.find();

    return posicaoVeiculos;
  }
}

export default ListPosicaoVeiculoService;
