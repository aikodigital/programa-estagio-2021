import { Request, Response } from 'express';
import CreateParadaService from '../services/CreateParadaService';
import ListParadaService from '../services/ListParadaService';
import ShowParadaService from '../services/ShowParadaService';
import UpdateParadaService from '../services/UpdateParadaService';
import DeleteParadaService from '../services/DeleteParadaService';
import ShowLinhaService from '@modules/linhas/services/ShowLinhaService';
import Linha from '@modules/linhas/typeorm/entities/Linha';

export default class ParadasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listParadas = new ListParadaService();
    const paradas = await listParadas.execute();

    return response.json(paradas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showParada = new ShowParadaService();

    const parada = await showParada.execute({ id });

    return response.json(parada);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, latitude, longitude, linhaId } = request.body;

    const getLinha = new ShowLinhaService();
    const linha: Linha = await getLinha.execute(linhaId);

    const createParada = new CreateParadaService();

    const parada = await createParada.execute({
      name,
      latitude,
      longitude,
      linha,
    });

    return response.json(parada);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, latitude, longitude } = request.body;
    const { id } = request.params;

    const updateParada = new UpdateParadaService();

    const parada = await updateParada.execute({
      id,
      name,
      latitude,
      longitude,
    });

    return response.json(parada);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteParada = new DeleteParadaService();

    await deleteParada.execute({ id });

    return response.json([]);
  }
}
