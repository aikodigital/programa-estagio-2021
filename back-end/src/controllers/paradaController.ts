import {Request, Response} from 'express';
import pool from '../db/db';


const getAll = (request: Request, response: Response) => {
  const query = `
    SELECT * FROM parada
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows);
    }
  });
};

const getById = (request: Request, response: Response) => {
  const {id} = request.params;

  const query = `
    SELECT * FROM parada WHERE id=${id};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      response.send(res.rows[0]);
    }
  });
};

const post = (request: Request, response: Response) => {
  const {name, latitude, longitude} = request.body;

  const query = `
    INSERT INTO Parada(Name, Latitude, Longitude) VALUES
      ('${name}', ${latitude}, ${longitude}) RETURNING id
    ;
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
  const {id} = request.body;

  const query = `
    DELETE FROM RelacaoLinhaParada WHERE ParadaId = ${id};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send(err.stack);
    } else {
      const secondQuery = `
        DELETE FROM Parada WHERE id = ${id} RETURNING *;
      `;

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.send({
            error: err,
          });
        } else {
          response.send(res.rows[0]);
        }
      });
    }
  });
};

const update = (request: Request, response: Response) => {
  const {id, name, latitude, longitude} = request.body;
  if (!id) {
    response.send({
      error: 'Id not provided',
    });
  }

  let query = `UPDATE Parada SET`;

  if (name) {
    query += `
      name = '${name}'
    `;
  }
  if (latitude) {
    if (name) {
      query += ', ';
    }

    query += `
      latitude = ${latitude}
    `;
  }
  if (longitude) {
    if (latitude || name) {
      query += ', ';
    }

    query += `
      longitude = ${longitude}
    `;
  }

  query += `
    WHERE Id = ${id}
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

export default {
  getAll,
  getById,
  post,
  deleteById,
  update,
};
