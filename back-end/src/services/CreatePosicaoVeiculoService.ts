/* eslint-disable max-len */
import { getRepository, Repository } from 'typeorm';

import PosicaoVeiculo from '../models/PosiçãoVeiculo';
import Veiculo from '../models/Veiculo';

interface Request {
    Latitude: number;
    Longitude: number;
    veiculoId: number;
}

class CreatePosicaoVeiculoService {
    private repository: Repository<PosicaoVeiculo>;

    constructor() {
      this.repository = getRepository(PosicaoVeiculo);
    }

    public async CreatePosicaoVeiculo({ Latitude, Longitude, veiculoId }: Request): Promise<PosicaoVeiculo> {
      const VeiculoRepository = getRepository(Veiculo);

      let posicaoVeiculo = await VeiculoRepository.findOne({
        where: {
          Id: veiculoId,
        },
      });

      if (!posicaoVeiculo) {
        posicaoVeiculo = VeiculoRepository.create({
          Id: veiculoId,
        });

        await VeiculoRepository.save(posicaoVeiculo);
      }

      const checkPosicaoVeiculoExists = await this.repository.findOne({
        where: { Latitude, Longitude },
      });

      if (checkPosicaoVeiculoExists) {
        throw new Error('Posicao de Veículo já existente!');
      }

      const posicaoveiculo = this.repository.create({
        Latitude,
        Longitude,
        veiculoId: posicaoVeiculo,
      });

      await this.repository.save(posicaoveiculo);
      return posicaoveiculo;
    }

    public async GetByIdPosicaoVeiculo(Id: number): Promise<PosicaoVeiculo | undefined> {
      const findPosicaoVeiculo = await this.repository.findOne(Id);

      if (!findPosicaoVeiculo) {
        throw new Error('Posição não existente!');
      }
      return findPosicaoVeiculo;
    }

    public async GetAllPosicaoVeiculo(): Promise<PosicaoVeiculo | undefined> {
      const posicoesveiculos = await this.repository.find();
      return posicoesveiculos;
    }

    // eslint-disable-next-line max-len
    public async PutPosicaoVeiculo(PosicaoVeiculoAntiga, { Latitude, Longitude }): Promise<PosicaoVeiculo> {
      const NovaPosicaoVeiculo = {
        Latitude,
        Longitude,
      };

      await this.repository.merge(PosicaoVeiculoAntiga, NovaPosicaoVeiculo);
      const atualizado = await this.repository.save(PosicaoVeiculoAntiga);
      return atualizado;
    }

    public async DeletePosicaoVeiculo(Id: number): Promise<PosicaoVeiculo | undefined> {
      const findPosicaoVeiculo = await this.repository.delete(Id);

      if (!findPosicaoVeiculo) {
        throw new Error('Veiculo não existente!');
      }
      return findPosicaoVeiculo;
    }
}
export default CreatePosicaoVeiculoService;
