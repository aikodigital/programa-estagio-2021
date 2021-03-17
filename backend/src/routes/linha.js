import { Router } from 'express';

import LinhaController from '../controllers/LinhaController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, LinhaController.store);

router.get('/index', loginRequired, LinhaController.index);

router.get('/show', loginRequired, LinhaController.show);

router.put('/update', loginRequired, LinhaController.update);

router.delete('/delete', loginRequired, LinhaController.delete);

router.get(
  '/veiculosPorLinha',
  loginRequired,
  LinhaController.veiculosPorLinha
);

export default router;
