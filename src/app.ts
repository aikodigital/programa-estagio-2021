import "reflect-metadata";
import "./bootstrap";
import express from "express";
import helmet from "helmet";
import { createConnection } from "typeorm";
import routes from "./routes";

class App {
  private app: express.Application;

  constructor() {
    this.initDatabase();
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(routes);
  }

  public async initDatabase() {
    await createConnection();
  }

  init() {
    const PORT = process.env.PORT || 3333;
    // const HOST = "0.0.0.0";
    this.app.listen(PORT);
  }
}

export default App;
