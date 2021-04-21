import { EntityRepository, Repository } from 'typeorm';
import Linha from '../entities/Linha';

@EntityRepository(Linha)
export class LinhaRepository extends Repository<Linha> {
  public async findByName(name: string): Promise<Linha | undefined> {
    const linha = this.findOne({
      where: {
        name,
      },
    });
    return linha;
  }
}
