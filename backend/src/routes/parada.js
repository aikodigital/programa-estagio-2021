import { Router } from 'express';

import ParadaController from '../controllers/ParadaController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, ParadaController.store);

router.get('/index', ParadaController.index);

router.get('/show', ParadaController.show);

router.put('/update', loginRequired, ParadaController.update);

router.delete('/delete', loginRequired, ParadaController.delete);

router.get('/linhasdaparada', ParadaController.linhasPorParada);

export default router;
