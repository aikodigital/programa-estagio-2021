import express, {Request, Response} from 'express';
import paradaController from './controllers/paradaController';
import linhaController from './controllers/linhasController';
import veiculoController from './controllers/veiculosController';
import posicaoVeiculoController from './controllers/posicaoVeiculoController';
// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Hello World',
  });
});

// Rotas relacionadas as Paradas
routes.get('/paradas', paradaController.getAll);

routes.get('/paradas/:id', paradaController.getById);

routes.post('/paradas', paradaController.post);

routes.delete('/paradas', paradaController.deleteById);

routes.put('/paradas', paradaController.update);

// Rotas relacionadas as Linhas
routes.get('/linhas/:id', linhaController.getById);

routes.get('/linhas', linhaController.getAll);

routes.post('/linhas', linhaController.post);

routes.delete('/linhas', linhaController.deleteById);

routes.put('/linhas', linhaController.update);

// Rotas relacionadas aos veiculos
routes.get('/veiculos', veiculoController.getAll);

routes.get('/veiculos/:id', veiculoController.getById);

routes.post('/veiculos', veiculoController.post);

routes.delete('/veiculos', veiculoController.deleteById);

routes.put('/veiculos', veiculoController.update);

// Rotas relacionadas as posições dos veículos
routes.get('/posicao_veiculos', posicaoVeiculoController.getAll);

routes.get('/posicao_veiculos/:veiculoId', posicaoVeiculoController.getById);

routes.post('/posicao_veiculos', posicaoVeiculoController.post);

routes.delete('/posicao_veiculos', posicaoVeiculoController.deleteById);

routes.put('/posicao_veiculos', posicaoVeiculoController.update);


export default routes;
