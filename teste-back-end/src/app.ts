import * as express from 'express';
import * as cors from 'cors';

import connectToDB from './config/db';
import paradaRouter from './routes/paradaRouter';

// Cria app express
const app = express();

// Usa as configurações do cors
app.use(cors());

app.use(express.json());

// Conecta com o banco de dados
connectToDB();

app.use('/parada', paradaRouter);

export default app;
