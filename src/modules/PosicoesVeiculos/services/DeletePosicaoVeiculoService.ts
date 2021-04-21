import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PosicaoVeiculoRepository from '../typeorm/repositories/PosicaoVeiculoRepository';

interface IRequest {
  id: string;
}

class DeletePosicaoVeiculoService {
  public async execute({ id }: IRequest): Promise<void> {
    const posicaoVeiculoRepository = getCustomRepository(
      PosicaoVeiculoRepository,
    );

    const posicaoVeiculo = await posicaoVeiculoRepository.findOne(id);

    if (!posicaoVeiculo) {
      throw new AppError('Posiçao de veiculo não encontrada');
    }

    await posicaoVeiculoRepository.remove(posicaoVeiculo);
  }
}

export default DeletePosicaoVeiculoService;
