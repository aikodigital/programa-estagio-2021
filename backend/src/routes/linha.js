import { Router } from 'express';

import LinhaController from '../controllers/LinhaController';

const router = Router();

router.post('/store', LinhaController.store);

router.get('/index', LinhaController.index);

router.get('/show', LinhaController.show);

router.put('/update', LinhaController.update);

router.delete('/delete', LinhaController.delete);

router.get('/veiculosPorLinha', LinhaController.veiculosPorLinha);

export default router;
