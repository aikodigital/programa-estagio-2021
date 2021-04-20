import pool from './db';

const query = `
INSERT INTO Parada(Name, Latitude, Longitude) VALUES
  ('Parada 1', 10.951708691425537, -75.75393060179533),
  ('Parada 2', -45.22489835508275, -67.2661050626887),
  ('Parada 3', -58.15552633709284, -117.2470960696775);

INSERT INTO Linha(Name) VALUES
  ('Linha 1'),
  ('Linha 2'),
  ('Linha 3');

INSERT INTO Veiculo(Name, Modelo, LinhaId) VALUES
  ('Onibus 1', 'VolksWagen', 1),
  ('Onibus 2', 'Mercedes-Benz', 1),
  ('Onibus 3', 'Mercedes-Benz', 2),
  ('Onibus 4', 'VolksWagen', 2),
  ('Onibus 5', 'Mercedes-Benz', 3),
  ('Onibus 6', 'VolksWagen', 3);

INSERT INTO PosicaoVeiculo(Latitude, Longitude, VeiculoId) VALUES
  (64.8794789059474, -125.28556094010099, 1),
  (5.588661211967178, -176.68574934247417, 2),
  (52.54347271930547, -139.912312190831, 3),
  (-3.5958407480031127, -64.65745047490282, 4),
  (23.529314604694235, -173.03479813955533, 5),
  (-10.003656239489928, -100.21401059118969, 6);

INSERT INTO RelacaoLinhaParada(ParadaId, LinhaId) VALUES
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 1),
  (3, 2);
`;

pool.query(query, (err, res) =>{
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log('Values Inserted In Tables');
  process.exit();
});
