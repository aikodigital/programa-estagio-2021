import {Request, Response} from 'express';
import pool from '../db/db';

const post = (request: Request, response: Response) => {
  const {latitude, longitude, veiculoId} = request.body;

  const query = `
  INSERT INTO PosicaoVeiculo(Latitude, Longitude, VeiculoId) 
    VALUES(${latitude}, ${longitude}, ${veiculoId})
    RETURNING *;
    `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows[0]);
    }
  });
};

const getAll = (request: Request, response: Response) => {
  const query = `SELECT * FROM PosicaoVeiculo`;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows);
    }
  });
};

const getById = (request: Request, response: Response) => {
  const {veiculoId} = request.params;

  const query = `
    SELECT * FROM PosicaoVeiculo WHERE VeiculoId=${veiculoId};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows[0]);
    }
  });
};

const update = (request: Request, response: Response) => {
  const {latitude, longitude, veiculoId} = request.body;
  if (!veiculoId) {
    response.status(400).send({error: 'ID not provided'});
  }
  let query = `UPDATE PosicaoVeiculo SET`;

  if (latitude) {
    query += `
      latitude = ${latitude}
    `;
  }
  if (longitude) {
    if (latitude) {
      query += ', ';
    }

    query += `
      longitude = '${longitude}'
    `;
  }

  query += `
    WHERE VeiculoId = ${veiculoId}
    RETURNING * ;
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows[0]);
    }
  });
};

const deleteById = (request: Request, response: Response) => {
  const {veiculoId} = request.body;

  const query = `DELETE FROM PosicaoVeiculo 
    WHERE VeiculoId = ${veiculoId}
    RETURNING *;`;

  pool.query(query, (err, res) => {
    if (err) {
      response.sendStatus(400);
    } else {
      response.send(res.rows[0]);
    }
  });
};

export default {
  post,
  getAll,
  getById,
  update,
  deleteById,
};
