import { EntityRepository, Repository } from 'typeorm';
import Veiculo from '../entities/Veiculo';

@EntityRepository(Veiculo)
export class VeiculoRepository extends Repository<Veiculo> {
  public async findByLinha(linhaId: string): Promise<Veiculo | undefined> {
    const veiculo = this.findOne({
      where: {
        linhaId,
      },
    });
    return veiculo;
  }
  public async findById(veiculoId: string): Promise<Veiculo | undefined> {
    const veiculo = this.findOne({
      where: {
        veiculoId,
      },
    });
    return veiculo;
  }
  public async findByName(name: string): Promise<Veiculo | undefined> {
    const veiculo = this.findOne({
      where: {
        name,
      },
    });
    return veiculo;
  }
}
