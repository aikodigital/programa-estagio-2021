import * as express from 'express';
import * as cors from 'cors';

import connectToDB from './config/db';

// Cria app express
const app = express();

// Usa as configurações do cors
app.use(cors());

// Conecta com o banco de dados
connectToDB();

export default app;
