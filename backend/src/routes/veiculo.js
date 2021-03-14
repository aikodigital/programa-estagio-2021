import { Router } from 'express';
import VeiculoController from '../controllers/VeiculoController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, VeiculoController.store);

router.get('/index', VeiculoController.index);

router.get('/show', VeiculoController.show);

router.put('/update', loginRequired, VeiculoController.update);

router.delete('/delete', loginRequired, VeiculoController.delete);

export default router;
