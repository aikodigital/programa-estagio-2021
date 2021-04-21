import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PosicaoVeiculosController from '../controllers/PosicaoVeiculosController';

const posicaoVeiculosRouter = Router();
const posicaoVeiculosController = new PosicaoVeiculosController();

posicaoVeiculosRouter.get('/', posicaoVeiculosController.index);

posicaoVeiculosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  posicaoVeiculosController.show,
);

posicaoVeiculosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      veiculoId: Joi.string().uuid().required(),
    },
  }),
  posicaoVeiculosController.create,
);

posicaoVeiculosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  posicaoVeiculosController.update,
);

posicaoVeiculosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  posicaoVeiculosController.delete,
);

export default posicaoVeiculosRouter;
