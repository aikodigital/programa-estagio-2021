import { Request, Response, Router } from 'express';
import linhaController from '../controllers/linhaController';
import veiculoController from '../controllers/veiculoController';
import Veiculo from '../entity/Veiculo';

const veiculoRouter = Router();

// READ
veiculoRouter.get('/', async (req: Request, res: Response) => {
  const { id } = req.query;
  if (id) {
    const veiculo = await veiculoController.getById(Number(id));
    res.send({
      id: veiculo.id,
      name: veiculo.name,
      modelo: veiculo.modelo,
      linhaId: veiculo.linha.id,
    });
  } else {
    const veiculos = await veiculoController.getAll();
    res.send(veiculos.map((veiculo) => ({
      id: veiculo.id,
      name: veiculo.name,
      modelo: veiculo.modelo,
      linhaId: veiculo.linha.id,
    })));
  }
});

// CREATE
veiculoRouter.post('/', async (req: Request, res: Response) => {
  const { name, modelo, linhaId } = req.body;
  const linha = await linhaController.getById(linhaId);
  const veiculo = new Veiculo(name, modelo, linha);
  const veiculoSalvo = await veiculoController.create(veiculo);
  return res.send({
    id: veiculoSalvo.id,
    name: veiculoSalvo.name,
    modelo: veiculoSalvo.modelo,
    linhaId: veiculoSalvo.linha.id,
  });
});

// UPDATE
veiculoRouter.put('/', async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.query;
  if (!id) {
    return res.status(400).send({ error: 'ID não informado na query' });
  }
  const veiculo = await veiculoController.getById(Number(id));
  if (!veiculo) {
    return res.status(400).send({ error: 'Não existe veiculo com o ID informado' });
  }
  const { name = '', modelo = '', linhaId = 0 } = {
    ...veiculo,
    ...data,
  };
  const linha = await linhaController.getById(linhaId);
  const veiculoObject = new Veiculo(name, modelo, linha);
  veiculoObject.id = Number(id);
  const veiculoAtualizada = await veiculoController.update(veiculoObject);
  return res.send(veiculoAtualizada);
});

// DELETE
veiculoRouter.delete('/', async (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).send({ error: 'ID não informado na query' });
  }
  const veiculo = await veiculoController.getById(Number(id));
  if (!veiculo) {
    return res.status(400).send({ error: 'Não existe veículo com o ID informado' });
  }
  await veiculoController.destroy(veiculo);
  return res.send({ success: 'Veículo deletado com sucesso' });
});

export default veiculoRouter;
