import {Request, Response} from 'express';
import pool from '../db/db';

interface ILinhaBody {
  id: number
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
      // Pega as paradas relacionadas a linha
      const secondQuery = `
        SELECT RelacaoLinhaParada.ParadaId as Id
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
          response.status(400).send({error: err.message});
          return;
        } else { // Organiza a resposta do servidor
          res.rows.forEach((relacao) => {
            const i = linhas.findIndex((linha) => linha.id === relacao.linhaid);

            linhas[i].paradas.push({
              id: relacao.id,
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
  const {id} = request.query;

  if (!id) {
    response.status(400).send({
      error: 'ID not provided',
    });
  }

  const query = `
    SELECT * FROM Linha WHERE Id=${id};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send({error: err.message});
    } else {
      const linha = ({...res.rows[0], paradas: []});
      if (!linha.id) {
        response.send();
      } else {
      // Pega as paradas relacionadas a linha
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
            response.status(400).send({error: err.message});
          } else {
            linha.paradas = res.rows;
            response.send(linha);
          }
        });
      }
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

      const secondQuery = insertRelacao(id, paradas, response);

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.status(400).send({error: err.message});
        } else {
          response.send({id});
        }
      });
    }
  });
};

const deleteById = (request: Request, response: Response) => {
  const {id} = request.body;

  const query = `
    DELETE FROM RelacaoLinhaParada WHERE LinhaId = ${id};
    DELETE FROM PosicaoVeiculo WHERE
      VeiculoId IN (SELECT Id FROM Veiculo WHERE LinhaId = ${id});
    DELETE FROM Veiculo WHERE LinhaId = ${id};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.send({
        error: {error: err.message},
      });
    } else {
      const secondQuery = `
        DELETE FROM Linha WHERE id = ${id} RETURNING *;
      `;

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.status(400).send({error: err.message});
        } else {
          response.send(res.rows[0]);
        }
      });
    }
  });
};

const update = (request: Request, response: Response) => {
  const {id, name, paradas} = <ILinhaBody>request.body;

  if (!id) {
    response.status(400).send({
      error: 'Id not provided',
    });
  }

  const updateName = `
    UPDATE Linha SET
    NAME = '${name}'
    WHERE ID = ${id}
    RETURNING *;
  `;

  const updateParadas = `
    DELETE FROM RelacaoLinhaParada WHERE LinhaId = ${id};
    ${insertRelacao(id, paradas || [], response)}
  `;

  let query = ``;

  if (name) {
    query += updateName;
  }

  if (paradas) {
    query += updateParadas;
  }

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send({error: err.message});
    } else {
      const secondQuery = `
        SELECT * FROM Linha WHERE id=${id};
      `;

      pool.query(secondQuery, (err, res) => {
        if (err) {
          response.status(400).send({error: err.message});
        } else {
          const linha = ({...res.rows[0], paradas: []});
          // Pega as paradas relacionadas a linha
          const thirdQuery = ` 
            SELECT RelacaoLinhaParada.ParadaId as Id
              , Parada.Name
              , Parada.Latitude
              , Parada.Longitude
            FROM RelacaoLinhaParada
            JOIN Parada
            ON RelacaoLinhaParada.ParadaId = Parada.Id
            WHERE RelacaoLinhaParada.LinhaId = ${linha.id}
          `;

          pool.query(thirdQuery, (err, res) => {
            if (err) {
              response.status(400).send({error: err.message});
            } else {
              linha.paradas = res.rows;
              response.send(linha);
            }
          });
        }
      });
    }
  });
};

const linhaPorParada = (request: Request, response: Response) => {
  const {paradaId} = request.query;

  const query = `
    SELECT Linha.Id,
      Linha.Name
    FROM RelacaoLinhaParada
    JOIN Linha
    ON Linha.Id = RelacaoLinhaParada.LinhaId
    WHERE RelacaoLinhaParada.ParadaId = ${paradaId};
  `;

  pool.query(query, (err, res) => {
    if (err) {
      response.status(400).send({error: err.message});
    } else {
      response.send(res.rows);
    }
  });
};

// Funçao que gera a query para inserir a relação LINHA - PARADA
const insertRelacao = (id: number, paradas: Number[], response: Response) => {
  let secondQuery = ``;

  paradas.forEach((paradaId) => {
    secondQuery += `
      INSERT INTO RelacaoLinhaParada(ParadaId, LinhaId) VALUES
        (${paradaId}, ${id});
    `;
  });

  return secondQuery;
};

export default {
  getAll,
  getById,
  post,
  deleteById,
  update,
  linhaPorParada,
};
