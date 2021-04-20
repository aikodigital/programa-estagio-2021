import { VeiculoRepository } from '@modules/typeorm/repositories/VeiculoRepository';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
}

class DeleteVeiculoService {
  public async execute({ id }: IRequest): Promise<void> {
    const veiculosRepository = getCustomRepository(VeiculoRepository);

    const veiculo = await veiculosRepository.findOne(id);

    if (!veiculo) {
      throw new AppError('Veículo não encontrado');
    }

    await veiculosRepository.remove(veiculo);
  }
}

export default DeleteVeiculoService;
