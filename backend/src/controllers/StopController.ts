import { Request, Response } from 'express';

import knex from '../database/connection';

export default class StopController {

  async create(request: Request, response: Response) {
    const { name, latitude, longitude } = request.body;

    const [id] = await knex('Parada').insert({
      name,
      latitude,
      longitude
    });

    return response.json({ id });
  }

  async index(request: Request, response: Response) {
    const stop = await knex('Parada').select('*');

    return response.json(stop);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const stop = await knex('Parada').where('id', id);

    return response.json(stop);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, latitude, longitude } = request.body;

    const stop = await knex('Parada')
      .where('id', id)
      .update({
        'name': name,
        'latitude': latitude,
        'longitude': longitude
      });

    return response.json(stop);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('Parada').where('id', id).delete();

    return response.status(204).send();
  }
}