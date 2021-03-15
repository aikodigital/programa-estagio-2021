import { Router } from 'express';
import VeiculoController from '../controllers/VeiculoController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', loginRequired, VeiculoController.store);

router.get('/index', loginRequired, VeiculoController.index);

router.get('/show', loginRequired, VeiculoController.show);

router.put('/update', loginRequired, VeiculoController.update);

router.delete('/delete', loginRequired, VeiculoController.delete);

export default router;
