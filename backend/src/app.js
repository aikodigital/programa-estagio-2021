require('dotenv').config();

import express from 'express';
import './database';

import paradaRoutes from './routes/parada';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/parada', paradaRoutes);
  }
}

export default new App().app;
