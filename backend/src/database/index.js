import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Models
import Parada from '../models/Parada';
import Linha from '../models/Linha';
import Veiculo from '../models/Veiculo';
import PosicaoVeiculo from '../models/PosicaoVeiculo';
import User from '../models/User';

const connection = new Sequelize(databaseConfig);

const models = [Veiculo, Parada, Linha, PosicaoVeiculo, User];

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
