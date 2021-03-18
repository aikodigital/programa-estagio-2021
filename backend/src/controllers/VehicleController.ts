import { Request, Response } from 'express';

import knex from '../database/connection';

export default class VehicleController {
  async veiculosPorLinha(request: Request, response: Response) {
    const { id } = request.params;

    const vehicles = await knex
      .select('Veiculo.*')
      .from('Linha')
      .join('Veiculo', 'Linha.Id', 'Veiculo.LinhaId')
      .where('Linha.Id', '=', id)

    return response.json(vehicles);
  }

  async create(request: Request, response: Response) {
    const { name, modelo, LinhaId: linhaId } = request.body;

    const [id] = await knex('Veiculo').insert({
      name,
      modelo,
      linhaId
    });

    return response.json({ id });
  }

  async index(request: Request, response: Response) {
    const line = await knex('Veiculo').select('*');

    return response.json(line);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const line = await knex('Veiculo').where('id', id);

    return response.json(line);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, modelo, LinhaId: linhaId } = request.body;

    const vehicle = await knex('Veiculo')
      .where('id', id)
      .update({
        'name': name,
        'modelo': modelo,
        'LinhaId': linhaId
      });

    return response.json(vehicle);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('Veiculo').where('id', id).delete();

    return response.status(204).send();
  }
}