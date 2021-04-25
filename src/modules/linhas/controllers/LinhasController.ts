import { Request, Response } from 'express';
import CreateLinhaService from '@modules/linhas/services/CreateLinhaService';
import DeleteLinhaService from '@modules/linhas/services/DeleteLinhaService';
import ListLinhaService from '@modules/linhas/services/ListLinhaServices';
import ShowLinhaService from '@modules/linhas/services/ShowLinhaService';
import UpdateLinhaService from '@modules/linhas/services/UpdateLinhaService';

export default class LinhasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLinhas = new ListLinhaService();
    const linhas = await listLinhas.execute();

    return response.json(linhas);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showLinha = new ShowLinhaService();

    const linha = await showLinha.execute({ id });

    return response.json(linha);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createLinha = new CreateLinhaService();

    const linha = await createLinha.execute({
      name,
    });

    return response.json(linha);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const updateLinha = new UpdateLinhaService();

    const linha = await updateLinha.execute({
      id,
      name,
    });

    return response.json(linha);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteLinha = new DeleteLinhaService();

    await deleteLinha.execute({ id });

    return response.json([]);
  }
  public async veiculosPorLinhas(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const getLinha = new ShowLinhaService();
    const linha = await getLinha.buscaVeiculos({ id });
    console.log(linha.veiculo);

    return response.json(linha);
  }
}
