import { Router } from 'express';
import VeiculoController from '../controllers/VeiculoController';

const router = Router();

router.post('/store', VeiculoController.store);

router.get('/index', VeiculoController.index);

router.get('/show', VeiculoController.show);

router.put('/update', VeiculoController.update);

router.delete('/delete', VeiculoController.delete);

export default router;
