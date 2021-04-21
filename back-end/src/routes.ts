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

routes.get('/paradas', paradaController.getAll);

routes.get('/paradas/:id', paradaController.getById);

routes.post('/paradas', paradaController.post);

routes.delete('/paradas', paradaController.deleteById);

routes.post('/linhas', linhaController.post);

routes.get('/linhas/:id', linhaController.getById);

routes.get('/linhas', linhaController.getAll);

export default routes;
