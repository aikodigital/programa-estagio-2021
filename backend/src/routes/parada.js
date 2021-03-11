import { Router } from 'express';
import ParadaController from '../controllers/ParadaController';

const router = Router();

router.post('/store', ParadaController.store);

router.get('/index', ParadaController.index);

router.get('/show', ParadaController.show);

router.put('/update', ParadaController.update);

router.delete('/delete', ParadaController.delete);

router.get('/linhasdaparada', ParadaController.linhasPorParada);

export default router;
