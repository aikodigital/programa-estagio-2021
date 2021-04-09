import { Router } from 'express';

import paradaRouter from './parada.routes';
import linhaRouter from './linha.routes';
import veiculoRouter from './veiculo.routes';
import posicaoveiculoRouter from './posicaoveiculo.routes';

const routes = Router();

routes.use('/parada', paradaRouter);
routes.use('/parada/:id', paradaRouter);
routes.use('/linha', linhaRouter);
routes.use('/linha/:id', linhaRouter);
routes.use('/veiculo', veiculoRouter);
routes.use('/veiculo/:id', veiculoRouter);
routes.use('/posicaoveiculo', posicaoveiculoRouter);
routes.use('/posicaoveiculo/:id', posicaoveiculoRouter);

routes.use('/parada/BuscarLinhasPorParada/:id', paradaRouter);
routes.use('/linha/BuscarVeiculosPorLinha/:id', paradaRouter);

export default routes;
