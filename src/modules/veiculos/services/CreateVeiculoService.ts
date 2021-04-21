import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import { VeiculoRepository } from '@modules/veiculos/typeorm/repositories/VeiculoRepository';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  name: string;
  modelo: string;
}

class CreateVeiculoService {
  public async execute({ name, modelo }: IRequest): Promise<Veiculo> {
    const veiculoRepository = getCustomRepository(VeiculoRepository);
    const veiculoExists = await veiculoRepository.findByName(name);

    if (veiculoExists) {
      throw new AppError('Já existe um veiculo com este nome');
    }

    const veiculo = veiculoRepository.create({
      name,
      modelo,
    });

    await veiculoRepository.save(veiculo);

    return veiculo;
  }
}

export default CreateVeiculoService;
