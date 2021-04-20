import { Router } from 'express';
import veiculosRouter from '@modules/veiculos/routes/veiculos.routes';

const routes = Router();

routes.use('/veiculos', veiculosRouter);

export default routes;
