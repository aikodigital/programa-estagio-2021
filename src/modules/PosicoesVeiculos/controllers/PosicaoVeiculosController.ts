import { Request, Response } from 'express';
import ListPosicaoVeiculoService from '../services/ListPosicaoVeiculo';
import ShowPosicaoVeiculoService from '../services/ShowPosicaoVeiculoService';
import UpdatePosicaoVeiculoService from '../services/UpdatePosicaoVeiculoService';
import CreatePosicaoVeiculoService from '../services/CreatePosicaoVeiculoService';
import DeletePosicaoVeiculoService from '../services/DeletePosicaoVeiculoService';
import ShowVeiculoService from '@modules/veiculos/services/ShowVeiculoService';
import Veiculo from '@modules/veiculos/typeorm/entities/Veiculo';

export default class PosicaoVeiculosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listPosicoesVeiculos = new ListPosicaoVeiculoService();
    const posicaoVeiculo = await listPosicoesVeiculos.execute();

    return response.json(posicaoVeiculo);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showPosicaoVeiculo = new ShowPosicaoVeiculoService();

    const posicaoVeiculo = await showPosicaoVeiculo.execute({ id });

    return response.json(posicaoVeiculo);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude, veiculoId } = request.body;
    const getVeiculo = new ShowVeiculoService();
    const id = veiculoId;
    const veiculo: Veiculo = await getVeiculo.execute({ id });

    const createPosicaoVeiculo = new CreatePosicaoVeiculoService();

    const posicaoVeiculo = await createPosicaoVeiculo.execute({
      latitude,
      longitude,
      veiculo,
    });

    return response.json(posicaoVeiculo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude, veiculoId } = request.body;
    const { id } = request.params;

    const updatePosicaoVeiculo = new UpdatePosicaoVeiculoService();

    const posicaoVeiculo = await updatePosicaoVeiculo.execute({
      id,
      latitude,
      longitude,
      veiculoId,
    });

    return response.json(posicaoVeiculo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePosicaoVeiulo = new DeletePosicaoVeiculoService();

    await deletePosicaoVeiulo.execute({ id });

    return response.json([]);
  }
}
