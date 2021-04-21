import express, {Request, Response} from 'express';
import paradaController from './controllers/paradaController';
import linhaController from './controllers/linhasController';
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

export default routes;
