import express, {Request, Response} from 'express';
import paradaController from './controllers/paradaController';
// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Hello World',
  });
});

routes.get('/paradas', paradaController.getAll);

routes.get('/paradas/:id', paradaController.getAll);

routes.post('/paradas', paradaController.post);

routes.delete('/paradas', paradaController.deleteById);

export default routes;
