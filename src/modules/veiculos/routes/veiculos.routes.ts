import { Router } from 'express';
import VeiculosController from '../Controllers/VeiculosController';
import { celebrate, Joi, Segments } from 'celebrate';

const veiculosRouter = Router();
const veiculosController = new VeiculosController();

veiculosRouter.get('/', veiculosController.index);

veiculosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  veiculosController.show,
);

veiculosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      modelo: Joi.string().required(),
    },
  }),
  veiculosController.create,
);

veiculosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      modelo: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  veiculosController.update,
);

veiculosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  veiculosController.delete,
);

export default veiculosRouter;
