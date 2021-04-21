import { EntityRepository, Repository } from 'typeorm';
import PosicaoVeiculo from '../entities/PosicaoVeiculo';

@EntityRepository(PosicaoVeiculo)
class PosicaoVeiculoRepository extends Repository<PosicaoVeiculo> {
  public async findyById(id: string): Promise<PosicaoVeiculo | undefined> {
    const posicaoVeiculoId = await this.findOne({
      where: {
        id,
      },
    });
    return posicaoVeiculoId;
  }
  public async findByPk(
    veiculoId: string,
  ): Promise<PosicaoVeiculo | undefined> {
    const veiculo = await this.findOne({
      where: {
        veiculoId,
      },
    });
    return veiculo;
  }
}
export default PosicaoVeiculoRepository;
