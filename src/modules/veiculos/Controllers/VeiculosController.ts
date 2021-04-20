import { Request, Response } from 'express';
import CreateVeiculoService from '../services/CreateVeiculoService';
import DeleteVeiculoService from '../services/DeleteVeiculoService';
import ListVeiculoService from '../services/ListVeiculoService';
import ShowVeiculoService from '../services/ShowVeiculoService';
import UpdateVeiculoSevice from '../services/UpdateVeiculoService';

export default class VeiculosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listVeiculos = new ListVeiculoService();
    const veiculos = await listVeiculos.execute();

    return response.json(veiculos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showVeiculo = new ShowVeiculoService();

    const veiculo = await showVeiculo.execute({ id });

    return response.json(veiculo);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, modelo } = request.body;

    const createVeiculo = new CreateVeiculoService();

    const veiculo = await createVeiculo.execute({
      name,
      modelo,
    });

    return response.json(veiculo);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, modelo } = request.body;
    const { id } = request.params;

    const updateVeiculo = new UpdateVeiculoSevice();

    const veiculo = await updateVeiculo.execute({
      id,
      name,
      modelo,
    });

    return response.json(veiculo);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVeiculo = new DeleteVeiculoService();

    await deleteVeiculo.execute({ id });

    return response.json([]);
  }
}