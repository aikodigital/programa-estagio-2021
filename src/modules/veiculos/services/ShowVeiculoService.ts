import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import { VeiculoRepository } from '@modules/veiculos/typeorm/repositories/VeiculoRepository';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import 'express-async-errors';
interface IRequest {
  id: string;
}

class ShowVeiculoService {
  public async execute({ id }: IRequest): Promise<Veiculo | undefined> {
    const veiculosRepository = getCustomRepository(VeiculoRepository);

    const veiculo = await veiculosRepository.findOne(id);

    if (!veiculo) {
      throw new AppError('Veículo não encontrado');
    }

    return veiculo;
  }
}

export default ShowVeiculoService;
