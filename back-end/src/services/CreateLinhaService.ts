import { getRepository, Repository } from 'typeorm';

import Linha from '../models/Linha';

interface Request {
    Name: string,
    paradas
}

class CreateLinhaService {
    private repository: Repository<Linha>;

    constructor() {
      this.repository = getRepository(Linha);
    }

    public async CreateLinha({ Name, paradas }: Request): Promise<Linha> {
      const checkLinhaExists = await this.repository.findOne({
        where: { Name },
      });

      if (checkLinhaExists) {
        throw new Error('Linha já existente!');
      }

      const linha = this.repository.create({
        Name,
        paradas,
      });

      await this.repository.save(linha);
      return linha;
    }

    public async GetByIdLinha(Id: number): Promise<Linha | undefined> {
      const findLinha = await this.repository.findOne(Id, { relations: ['paradas'] });

      if (!findLinha) {
        throw new Error('Parada não existente!');
      }
      return findLinha;
    }

    public async GetAllLinhas(): Promise<Linha | undefined> {
      const linhas = await this.repository.find({ relations: ['paradas'] });
      return linhas;
    }

    public async PutLinha(LinhaAntiga, { Name, paradas }): Promise<Linha> {
      const NovaLinha = {
        Name,
        paradas,
      };

      await this.repository.merge(LinhaAntiga, NovaLinha);
      const atualizada = await this.repository.save(LinhaAntiga);
      return atualizada;
    }

    public async DeleteLinha(Id: number): Promise<Linha | undefined> {
      const findLinha = await this.repository.delete(Id);

      if (!findLinha) {
        throw new Error('Linha não existente!');
      }
      return findLinha;
    }

    public async VeiculosPorLinha(Id: number): Promise<Linha | undefined> {
      const findVeiculosPorLinha = await this.repository.findOne(Id, { relations: ['Veiculos'] });

      if (!findVeiculosPorLinha) {
        throw new Error('Veículo não existente!');
      }
      return findVeiculosPorLinha;
    }
}

export default CreateLinhaService;
