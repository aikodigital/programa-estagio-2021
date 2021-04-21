import pool from './db';

const query = `
CREATE TABLE Parada(
  Id SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  Latitude DOUBLE PRECISION,
  Longitude DOUBLE PRECISION
);

CREATE TABLE Linha(
  Id SERIAL PRIMARY KEY,
  Name VARCHAR(255)
);

CREATE TABLE Veiculo(
  Id SERIAL PRIMARY KEY,
  Name VARCHAR(255),
  Modelo VARCHAR(255),
  LinhaId INTEGER NOT NULL REFERENCES Linha (Id)
);

CREATE TABLE PosicaoVeiculo(
  Latitude DOUBLE PRECISION,
  Longitude DOUBLE PRECISION,
  VeiculoId INTEGER NOT NULL REFERENCES Veiculo (Id),
  UNIQUE(VeiculoId)
);

CREATE TABLE RelacaoLinhaParada(
  ParadaId INTEGER NOT NULL REFERENCES Parada (Id),
  LinhaId INTEGER NOT NULL REFERENCES Linha (Id)
);
`;

pool.query(query, (err, res) =>{
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log('Tables Created');
  process.exit();
});
