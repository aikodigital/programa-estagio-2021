import Veiculo from '@modules/typeorm/entities/Veiculo';
import { VeiculoRepository } from '@modules/typeorm/repositories/VeiculoRepository';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
}

class ShowVeiculoService {
  public async execute({ id }: IRequest): Promise<Veiculo | undefined> {
    const veiculosRepository = getCustomRepository(VeiculoRepository);

    const veiculo = await veiculosRepository.findOne({ id });
    console.log('vec:', veiculo);

    if (!veiculo) {
      throw new AppError('Veículo não encontrado');
    }

    return veiculo;
  }
}

export default ShowVeiculoService;
