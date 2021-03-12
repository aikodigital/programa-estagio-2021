import { Router } from 'express';

import LinhaController from '../controllers/LinhaController';

const router = Router();

/**
 * @swagger
 * /customers:
 *  put:
 *    description: Use to return all customer
 *    tags: [Books]
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/customer', (req, res) => {
  res.status(200).send('Successfully updated customer');
});

router.post('/store', LinhaController.store);

router.get('/index', LinhaController.index);

router.get('/show', LinhaController.show);

router.put('/update', LinhaController.update);

router.delete('/delete', LinhaController.delete);

router.get('/veiculosPorLinha', LinhaController.veiculosPorLinha);

export default router;
