import { Request, Response, Router } from 'express';
import linhaController from '../controllers/linhaController';
import paradaController from '../controllers/paradaController';
import Linha from '../entity/Linha';

const linhaRouter = Router();

// READ
linhaRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (id) {
      const linha = await linhaController.getById(Number(id));
      return res.send(linha);
    }
    const linhas = await linhaController.getAll();
    return res.send(linhas);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// GET VEICULOS POR LINHA
linhaRouter.get('/veiculos', async (req: Request, res: Response) => {
  try {
    const { linhaId } = req.query;
    if (!linhaId) { return res.status(400).send({ error: 'ID da Linha não informada na query' }); }
    const veiculos = await linhaController.getVeiculos(Number(linhaId));
    return res.send(veiculos);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// CREATE
linhaRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const linha = new Linha(name);
    const linhaSalva = await linhaController.create(linha);
    return res.send(linhaSalva);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// ADD PARADA TO LINHA
linhaRouter.post('/add-parada', async (req: Request, res: Response) => {
  try {
    const { linhaId, paradaId } = req.body;
    const linha = await linhaController.getById(linhaId);
    const parada = await paradaController.getById(paradaId);
    linha.paradas.push(parada);
    await linhaController.create(linha);
    const linhaSalva = await linhaController.getById(linhaId);
    return res.send(linhaSalva);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// UPDATE
linhaRouter.put('/', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.query;

    if (!id) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }

    const linha = await linhaController.getById(Number(id));

    if (!linha) {
      return res.status(400).send({ error: 'Não existe linha com o ID informado' });
    }

    const { name = '' } = {
      ...linha,
      ...data,
    };

    const linhaObject = new Linha(name);
    linhaObject.id = Number(id);
    const linhaAtualizada = await linhaController.update(linhaObject);
    return res.send(linhaAtualizada);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// DELETE
linhaRouter.delete('/', async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }

    const linha = await linhaController.getById(Number(id));

    if (!linha) {
      return res.status(400).send({ error: 'Não existe linha com o ID informado' });
    }

    await linhaController.destroy(linha);

    return res.send({ success: 'linha deletada com sucesso' });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

export default linhaRouter;
