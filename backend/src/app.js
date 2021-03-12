require('dotenv').config();

import express from 'express';

const app = express();
import './database';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import paradaRoutes from './routes/parada';
import linhaRoutes from './routes/linha';
import veiculoRoutes from './routes/veiculo';
import posicaoVeiculoRoutes from './routes/posicaoVeiculo';

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'API backend Aiko',
      description: 'API semelhante à olho vivo',
      contact: {
        name: 'Paulo Sérgio',
      },
      servers: ['http://localhost:3333'],
    },
  },
  // ['.routes/*.js']
  apis: [
    'src/app.js',
    'src/routes/linha.js',
    'src/controllers/LinhaController.js',
    'src/controllers/ParadaController.js',
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: book api
 */

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/customers', (req, res) => {
  res.status(200).json({ msg: 'hello' });
});

class App {
  constructor() {
    this.app = app;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    console.log('first');
  }

  routes() {
    this.app.use('/parada', paradaRoutes);

    this.app.use('/linha', linhaRoutes);
    this.app.use('/veiculo', veiculoRoutes);
    this.app.use('/posicaoveiculo', posicaoVeiculoRoutes);
  }
}

export default new App().app;
