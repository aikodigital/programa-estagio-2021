import { EntityRepository, Repository } from 'typeorm';
import Parada from '../entities/Parada';

@EntityRepository(Parada)
class ParadaRepository extends Repository<Parada> {
  public async findyByName(name: string): Promise<Parada | undefined> {
    const parada = await this.findOne({
      where: {
        name,
      },
    });
    return parada;
  }
  public async findyById(id: string): Promise<Parada | undefined> {
    const parada = await this.findOne({
      where: {
        id,
      },
    });
    return parada;
  }
}
export default ParadaRepository;
