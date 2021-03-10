require('dotenv').config();

import express from 'express';
import './database/index';

import paradaRoutes from './routes/parada';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.use('/parada', paradaRoutes);
  }
}

export default App().app;
