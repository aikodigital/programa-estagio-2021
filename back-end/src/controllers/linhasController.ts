import {Request, Response} from 'express';
import pool from '../db/db';

interface ILinhaBody {
  name: string,
  paradas: Number[]
}

const getAll = async (request: Request, response: Response) => {
  const query = `
    SELECT * FROM Linha
  `;
  pool.query(query, async (err, res) => {
    if (err) {
      response.send({
        error: 'Access unsucessful',
      });
      return;
    } else {
      const linhas = res.rows;
      const secondQuery = `
        SELECT RelacaoLinhaParada.ParadaId
          , RelacaoLinhaParada.LinhaId
          , Parada.Name
          , Parada.Latitude
          , Parada.Longitude
        FROM RelacaoLinhaParada
        JOIN Parada
        ON RelacaoLinhaParada.ParadaId = Parada.Id
      `;

      linhas.forEach((linha) => {
        linha.paradas = [];
      });

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.send({
            error: err,
          });
          return;
        } else {
          res.rows.forEach((relacao) => {
            const i = linhas.findIndex((linha) => linha.id === relacao.linhaid);
            linhas[i].paradas.push({
              paradaid: relacao.paradaid,
              name: relacao.name,
              latitude: relacao.latitude,
              longitude: relacao.longitude,
            });
          });
          response.send(linhas);
        }
      });
    }
  });
};

const getById = (request: Request, response: Response) => {
  const {id} = request.params;

  const query = `
    SELECT * FROM Linha WHERE id=${id};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.send({
        error: 'Access unsucessful',
      });
    } else {
      const linha = ({...res.rows[0], parada: []});
      const secondQuery = `
        SELECT RelacaoLinhaParada.ParadaId as Id
          , Parada.Name
          , Parada.Latitude
          , Parada.Longitude
        FROM RelacaoLinhaParada
        JOIN Parada
        ON RelacaoLinhaParada.ParadaId = Parada.Id
        WHERE RelacaoLinhaParada.LinhaId = ${linha.id}
      `;

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.send({
            error: err,
          });
        } else {
          linha.parada = res.rows;
          response.send(linha);
        }
      });
    }
  });
};

const post = (request: Request, response: Response) => {
  const {name, paradas} = <ILinhaBody>request.body;
  let id = 0;

  const query = `
    INSERT INTO Linha(Name) VALUES
      ('${name}') RETURNING id
    ;
  `;


  pool.query(query, (err, res) => {
    if (err) {
      response.send({
        error: err,
      });
    } else {
      id = res.rows[0].id;
      insertRelacao(id, paradas, response);
    }
  });
};

const deleteById = (request: Request, response: Response) => {
  const {id} = request.body;

  const query = `
    DELETE FROM Parada WHERE id = ${id} RETURNING *
    ;
  `;
  pool.query(query, (err, res) => {
    if (err) {
      response.send({
        error: err,
      });
    } else {
      response.send(res.rows[0]);
    }
  });
};

const insertRelacao = (id: Number, paradas: Number[], response: Response) => {
  let secondQuery = ``;

  paradas.forEach((paradaId) => {
    secondQuery += `
      INSERT INTO RelacaoLinhaParada(ParadaId, LinhaId) VALUES
        (${paradaId}, ${id});
    `;
  });

  pool.query(secondQuery, (err, res) => {
    if (err) {
      response.send({
        error: err,
      });
    }
  });

  if (id != 0) {
    response.send({id});
  }
};

export default {
  getAll,
  getById,
  post,
  deleteById,
};
