import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ParadasController from '../controllers/ParadasController';

const ParadasRouter = Router();
const paradasController = new ParadasController();

ParadasRouter.get('/', paradasController.index);

ParadasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  paradasController.show,
);

ParadasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
  }),
  paradasController.create,
);

ParadasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  paradasController.update,
);

ParadasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  paradasController.delete,
);

export default ParadasRouter;
