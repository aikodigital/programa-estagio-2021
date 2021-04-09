import { getRepository, Repository } from 'typeorm';

import Parada from '../models/Parada';

interface Request {
    Name: string;
    Latitude: number;
    Longitude: number;
}

class CreateParadaService {
    private repository: Repository<Parada>;

    constructor() {
      this.repository = getRepository(Parada);
    }

    public async CreateLinhaService({ Name, Longitude, Latitude }: Request): Promise<Parada> {
      const checkParadaExists = await this.repository.findOne({
        where: { Name },
      });

      if (checkParadaExists) {
        throw new Error('Parada já existente!');
      }

      const parada = this.repository.create({
        Name,
        Latitude,
        Longitude,
      });

      await this.repository.save(parada);
      return parada;
    }

    public async GetByIdParada(Id: number): Promise<Parada | undefined> {
      const findParada = await this.repository.findOne(Id);

      if (!findParada) {
        throw new Error('Parada não existente!');
      }
      return findParada;
    }

    public async GetAllParadas(): Promise<Parada | undefined> {
      const all = await this.repository.find();
      return all;
    }

    public async PutLinha(ParadaAntiga, { Name, Longitude, Latitude }): Promise<Parada> {
      const NovaParada = {
        Name,
        Longitude,
        Latitude,
      };

      await this.repository.merge(ParadaAntiga, NovaParada);
      const results = await this.repository.save(ParadaAntiga);
      return results;
    }

    public async DeleteParada(Id: number): Promise<Parada | undefined> {
      const findParada = await this.repository.delete(Id);

      if (!findParada) {
        throw new Error('Parada não existente!');
      }
      return findParada;
    }

    public async LinhasPorParada(Id: number): Promise<Parada | undefined> {
      const findLinhasPorParada = await this.repository.findOne(Id, { relations: ['Linhas'] });

      if (!findLinhasPorParada) {
        throw new Error('Linha não existente!');
      }
      return findLinhasPorParada;
    }
}
export default CreateParadaService;
