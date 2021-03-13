import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/store', UserController.store);

router.get('/index', UserController.index);

// router.get('/show', UserController.show);

// router.put('/update', UserController.update);

// router.delete('/delete', UserController.delete);

export default router;
