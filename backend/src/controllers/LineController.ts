import { Request, Response } from 'express';

import knex from '../database/connection';

export default class LineController {
  async linhasPorParada(request: Request, response: Response) {
    const { id } = request.params;

    const line = await knex
      .select('Linha.*')
      .from('Parada')
      .join('line_stop', 'Parada.Id', 'line_stop.stop_id')
      .join('Linha', 'Linha.Id', 'line_stop.line_id')
      .where('Parada.Id', '=', id)

    return response.json(line);
  }

  async create(request: Request, response: Response) {
    const { name, paradas } = request.body;

    const trx = await knex.transaction();

    const line = { name }

    const insertedLine = await trx('Linha').insert(line);

    const line_id = insertedLine[0];

    const lineStop = paradas
      .split(',')
      .map((stop: string) => Number(stop.trim()))
      .map((stop_id: number) => {
        return {
          line_id,
          stop_id
        };
      })

    await trx('line_stop').insert(lineStop);
    await trx.commit();

    return response.json({
      id: line_id,
      ...line
    });
  }

  async index(request: Request, response: Response) {
    const line = await knex('Linha').select('*');

    return response.json(line);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const line = await knex('Linha').where('id', id);

    return response.json(line);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const line = await knex('Linha')
      .where('id', id)
      .update({
        'name': name
      });

    return response.json(line);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await knex('Linha').where('id', id).delete();

    return response.status(204).send();
  }
}