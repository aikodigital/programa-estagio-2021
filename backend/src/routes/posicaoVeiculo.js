import { Router } from 'express';
import PosicaoController from '../controllers/PosicaoController';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, PosicaoController.store);

router.get('/index', PosicaoController.index);

router.get('/show', PosicaoController.show);

router.put('/update', loginRequired, PosicaoController.update);

router.delete('/delete', loginRequired, PosicaoController.delete);

export default router;
