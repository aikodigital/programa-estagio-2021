import { Router } from 'express';
import VeiculosController from '../Controllers/VeiculosController';

const veiculosRouter = Router();
const veiculosController = new VeiculosController();

veiculosRouter.get('', veiculosController.index);
veiculosRouter.get('/:id', veiculosController.show);
veiculosRouter.post('/', veiculosController.create);
veiculosRouter.put('/:id', veiculosController.update);
veiculosRouter.delete('/:id', veiculosController.delete);

export default veiculosRouter;
