import pool from './db';

const query = `
DROP TABLE RelacaoLinhaParada;

DROP TABLE PosicaoVeiculo;

DROP TABLE Veiculo;

DROP TABLE Linha;

DROP TABLE Parada;
`;

pool.query(query, (err, res) =>{
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log('Tables Deleted');
  process.exit();
});

