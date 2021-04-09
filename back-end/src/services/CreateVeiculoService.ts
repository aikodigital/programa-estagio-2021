import { getRepository, Repository } from 'typeorm';

import Veiculo from '../models/Veiculo';
import Linha from '../models/Linha';

interface Request {
    Name: string;
    Modelo: string;
    linhaId: number;
}

class CreateVeiculoService {
    private repository: Repository<Veiculo>;

    constructor() {
      this.repository = getRepository(Veiculo);
    }

    public async CreateVeiculo({ Name, Modelo, linhaId }: Request): Promise<Veiculo> {
      const LinhaRepository = getRepository(Linha);

      let veiculolinha = await LinhaRepository.findOne({
        where: {
          Id: linhaId,
        },
      });

      if (!veiculolinha) {
        veiculolinha = LinhaRepository.create({
          Id: linhaId,
        });

        await LinhaRepository.save(veiculolinha);
      }

      const checkVeiculoExists = await this.repository.findOne({
        where: { Name },
      });

      if (checkVeiculoExists) {
        throw new Error('Veículo já existente!');
      }

      const veiculo = this.repository.create({
        Name,
        Modelo,
        linhaId: veiculolinha,
      });

      await this.repository.save(veiculo);
      return veiculo;
    }

    public async GetByIdVeiculo(Id: number): Promise<Veiculo | undefined> {
      const findVeiculo = await this.repository.findOne(Id);

      if (!findVeiculo) {
        throw new Error('Veículo não existente!');
      }
      return findVeiculo;
    }

    public async GetAllVeiculos(): Promise<Veiculo | undefined> {
      const veiculos = await this.repository.find();
      return veiculos;
    }

    public async PutVeiculo(VeiculoAntigo, { Name, Modelo }): Promise<Veiculo> {
      const NovoVeiculo = {
        Name,
        Modelo,
      };

      await this.repository.merge(VeiculoAntigo, NovoVeiculo);
      const atualizado = await this.repository.save(VeiculoAntigo);
      return atualizado;
    }

    public async DeleteVeiculo(Id: number): Promise<Veiculo | undefined> {
      const findVeiculo = await this.repository.delete(Id);

      if (!findVeiculo) {
        throw new Error('Veiculo não existente!');
      }
      return findVeiculo;
    }
}
export default CreateVeiculoService;
