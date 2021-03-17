import { Router } from 'express';

import ParadaController from '../controllers/ParadaController';
import ParadasLinhasController from '../controllers/ParadasLinhasController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, ParadaController.store);

router.get('/index', loginRequired, ParadaController.index);

router.get('/show', loginRequired, ParadaController.show);

router.put('/update', loginRequired, ParadaController.update);

router.delete('/delete', loginRequired, ParadaController.delete);

router.get(
  '/linhasdaparada',
  loginRequired,
  ParadasLinhasController.linhasPorParada
);

router.post(
  '/cadastrarLinhaEmParada',
  loginRequired,
  ParadasLinhasController.cadastrarLinhaEmParada
);

export default router;
