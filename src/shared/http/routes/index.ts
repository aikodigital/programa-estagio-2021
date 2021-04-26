import { Router } from 'express';
import veiculosRouter from '@modules/veiculos/routes/veiculos.routes';
import ParadasRouter from '@modules/paradas/routes/paradas.routes';
import linhasRouter from '@modules/linhas/routes/linhas.routes';
import posicaoVeiculosRouter from '@modules/PosicoesVeiculos/routes/posicaoVeiculo.routes';

const routes = Router();

routes.use('/veiculos', veiculosRouter);
routes.use('/paradas', ParadasRouter);
routes.use('/linhas', linhasRouter);
routes.use('/posicaoVeiculos', posicaoVeiculosRouter);

export default routes;
