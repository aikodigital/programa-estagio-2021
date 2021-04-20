import Veiculo from '@modules/typeorm/entities/Veiculo';
import { VeiculoRepository } from '@modules/typeorm/repositories/VeiculoRepository';
import { getCustomRepository } from 'typeorm';

class ListVeiculoService {
  public async execute(): Promise<Veiculo[]> {
    const veiculosRepository = getCustomRepository(VeiculoRepository);

    const veiculos = await veiculosRepository.find();

    return veiculos;
  }
}

export default ListVeiculoService;
