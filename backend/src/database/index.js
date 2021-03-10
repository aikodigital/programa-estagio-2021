import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import Parada from '../models/Parada';
import Linha from '../models/Linha';
import Veiculo from '../models/Veiculo';
import PosicaoVeiculo from '../models/PosicaoVeiculo';

const connection = new Sequelize(databaseConfig);

const models = [Veiculo, Parada, Linha, PosicaoVeiculo];

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

// Veiculo.create({ name: 'Volvo', modelo: 'V2.0', linha_id: 1 });
// Veiculo.create({ name: 'Scannia', modelo: 'Flex', linha_id: 3 });
// Veiculo.create({ name: 'Volwswagem 2', modelo: 'Elétrico 2', linha_id: 5 });
// Veiculo.create({ name: 'Volwswagem 3', modelo: 'Elétrico 3', linha_id: 5 });

// Parada.create({
//   name: 'R. Agamenon Pereira da Silva',
//   latitude: -23.692865,
//   longitude: -46.77835,
// });

// Parada.create({
//   name: 'R RAMOS BATISTA/ TUNEL PRESIDENTE JANIO QUADROS',
//   latitude: -23.591316,
//   longitude: -46.684987,
// });

// Linha.create({ name: 'Selecta' });
// Linha.create({ name: 'Baeta neves' });
// Linha.create({ name: 'Baeta neves centro' });
// Linha.create({ name: 'Golden Park' });
// Linha.create({ name: 'Rudge Ramos' });

// PosicaoVeiculo.create({
//   latitude: -23.601309,
//   longitude: -46.602029875,
//   veiculo_id: 4,
// });

// PosicaoVeiculo.create({
//   latitude: -23.550328750000002,
//   longitude: -46.67501075,
//   veiculo_id: 5,
// });

// PosicaoVeiculo.create({
//   latitude: -23.6222275,
//   longitude: -46.760455,
//   veiculo_id: 11,
// });
