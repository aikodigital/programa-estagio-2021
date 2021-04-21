import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';
import { VeiculoRepository } from '@modules/veiculos/typeorm/repositories/VeiculoRepository';
import AppError from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  id: string;
  name: string;
  modelo: string;
}

class UpdateVeiculoService {
  public async execute({ id, name, modelo }: IRequest): Promise<Veiculo> {
    const veiculosRepository = getCustomRepository(VeiculoRepository);

    const veiculo = await veiculosRepository.findOne(id);

    if (!veiculo) {
      throw new AppError('Veículo não encontrado');
    }
    const veiculoExists = await veiculosRepository.findByName(name);

    if (veiculoExists) {
      throw new AppError('Já existe um veiculo com este nome');
    }

    veiculo.name = name;
    veiculo.modelo = modelo;

    await veiculosRepository.save(veiculo);

    return veiculo;
  }
}

export default UpdateVeiculoService;
