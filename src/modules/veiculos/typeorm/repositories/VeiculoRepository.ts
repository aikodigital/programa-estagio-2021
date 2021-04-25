import { EntityRepository, Repository } from 'typeorm';
import Veiculo from '../entities/Veiculo';

@EntityRepository(Veiculo)
export class VeiculoRepository extends Repository<Veiculo> {
  public async findByName(name: string): Promise<Veiculo | undefined> {
    const veiculo = this.findOne({
      where: {
        name,
      },
    });
    return veiculo;
  }
}
