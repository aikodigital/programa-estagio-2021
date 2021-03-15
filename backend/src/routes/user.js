import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/store', UserController.store);

// router.get('/index', loginRequired, UserController.index);

// router.get('/show', loginRequired, UserController.show);

router.put('/update', loginRequired, UserController.update);

router.delete('/delete', loginRequired, UserController.delete);

export default router;
