import { Router } from 'express';
import PosicaoController from '../controllers/PosicaoController';

const router = Router();

router.post('/store', PosicaoController.store);

router.get('/index', PosicaoController.index);

router.get('/show', PosicaoController.show);

router.put('/update', PosicaoController.update);

router.delete('/delete', PosicaoController.delete);

export default router;
