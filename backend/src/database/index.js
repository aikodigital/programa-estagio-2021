import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const connection = new Sequelize(databaseConfig);

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
