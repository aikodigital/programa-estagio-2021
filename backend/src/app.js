require('dotenv').config();

import express from 'express';

const app = express();
import './database';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swagger';

import paradaRoutes from './routes/parada';
import linhaRoutes from './routes/linha';
import veiculoRoutes from './routes/veiculo';
import posicaoVeiculoRoutes from './routes/posicaoVeiculo';

const swaggerDocs = swaggerJsDoc(swaggerOptions);

class App {
  constructor() {
    this.app = app;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  routes() {
    this.app.use('/parada', paradaRoutes);
    this.app.use('/linha', linhaRoutes);
    this.app.use('/veiculo', veiculoRoutes);
    this.app.use('/posicaoveiculo', posicaoVeiculoRoutes);
  }
}

export default new App().app;
