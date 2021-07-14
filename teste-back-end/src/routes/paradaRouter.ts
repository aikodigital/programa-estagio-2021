import { Request, Response, Router } from 'express';
import paradaController from '../controllers/paradaController';
import Parada from '../entity/Parada';

const paradaRouter = Router();

// READ
paradaRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (id) {
      const parada = await paradaController.getById(Number(id));
      return res.send(parada);
    }
    const paradas = await paradaController.getAll();
    return res.send(paradas);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// GET LINHAS POR PARADA
paradaRouter.get('/linhas', async (req: Request, res: Response) => {
  try {
    const { paradaId } = req.query;
    if (!paradaId) { return res.status(400).send({ error: 'ID da Parada não informada na query' }); }
    const linhas = await paradaController.getLinhas(Number(paradaId));
    return res.send(linhas);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// CREATE
paradaRouter.post('/', async (req: Request, res: Response) => {
  const { name, latitude, longitude } = req.body;
  const parada = new Parada(name, latitude, longitude);
  const paradaSalva = await paradaController.create(parada);
  res.send(paradaSalva);
});

// UPDATE
paradaRouter.put('/', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.query;
    if (!id) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }
    const parada = await paradaController.getById(Number(id));
    if (!parada) {
      return res.status(400).send({ error: 'Não existe parada com o ID informado' });
    }
    const { name = '', latitude = 0, longitude = 0 } = {
      ...parada,
      ...data,
    };
    const paradaObject = new Parada(name, latitude, longitude);
    paradaObject.id = Number(id);
    const paradaAtualizada = await paradaController.update(paradaObject);
    return res.send(paradaAtualizada);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// DELETE
paradaRouter.delete('/', async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }
    const parada = await paradaController.getById(Number(id));
    if (!parada) {
      return res.status(400).send({ error: 'Não existe parada com o ID informado' });
    }
    await paradaController.destroy(parada);
    return res.send({ success: 'Parada deletada com sucesso' });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

export default paradaRouter;
