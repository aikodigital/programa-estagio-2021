import { Request, Response, Router } from 'express';
import linhaController from '../controllers/linhaController';
import paradaController from '../controllers/paradaController';
import Linha from '../entity/Linha';

const linhaRouter = Router();

// READ
linhaRouter.get('/', async (req: Request, res: Response) => {
  const { id } = req.query;
  if (id) {
    const linha = await linhaController.getById(Number(id));
    res.send(linha);
  } else {
    const linhas = await linhaController.getAll();
    res.send(linhas);
  }
});

// GET VEICULOS POR LINHA
linhaRouter.get('/veiculos', async (req: Request, res: Response) => {
  const { linhaId } = req.query;
  if (!linhaId) { return res.status(400).send({ error: 'ID da Linha não informada na query' }); }
  const veiculos = await linhaController.getVeiculos(Number(linhaId));
  return res.send(veiculos);
});

// CREATE
linhaRouter.post('/', async (req: Request, res: Response) => {
  const { name } = req.body;
  const linha = new Linha(name);
  const linhaSalva = await linhaController.create(linha);
  return res.send(linhaSalva);
});

// ADD PARADA TO LINHA
linhaRouter.post('/add-parada', async (req: Request, res: Response) => {
  const { linhaId, paradaId } = req.body;
  const linha = await linhaController.getById(linhaId);
  const parada = await paradaController.getById(paradaId);
  linha.paradas.push(parada);
  await linhaController.create(linha);
  const linhaSalva = await linhaController.getById(linhaId);
  return res.send(linhaSalva);
});

// UPDATE
linhaRouter.put('/', async (req: Request, res: Response) => {
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
});

// DELETE
linhaRouter.delete('/', async (req: Request, res: Response) => {
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
});

export default linhaRouter;
