import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import LinhasController from '@modules/linhas/controllers/LinhasController';

const linhasRouter = Router();
const linhasController = new LinhasController();

linhasRouter.get('/', linhasController.index);

linhasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  linhasController.show,
);

linhasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  linhasController.create,
);

linhasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  linhasController.update,
);

linhasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  linhasController.delete,
);
linhasRouter.get(
  '/:id/veiculos',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  linhasController.veiculosPorLinhas,
);

export default linhasRouter;
