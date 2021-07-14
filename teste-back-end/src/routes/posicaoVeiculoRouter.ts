import { Request, Response, Router } from 'express';
import veiculoController from '../controllers/veiculoController';
import posicaoVeiculoController from '../controllers/posicaoVeiculoController';
import PosicaoVeiculo from '../entity/PosicaoVeiculo';

const posicaoVeiculoRouter = Router();

// READ
posicaoVeiculoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { veiculoId } = req.query;

    if (veiculoId) {
      const posicaoVeiculo = await posicaoVeiculoController.getById(Number(veiculoId));
      if (!posicaoVeiculo) {
        return res.status(400).send({ error: 'Não existe posição do veiculo com o ID informado cadastrada' });
      }
      return res.send(posicaoVeiculo);
    }
    const posicoesVeiculos = await posicaoVeiculoController.getAll();
    return res.send(posicoesVeiculos);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// CREATE
posicaoVeiculoRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { latitude, longitude, veiculoId } = req.body;
    const veiculo = await veiculoController.getById(veiculoId);
    if (!veiculo) {
      return res.status(400).send({ error: 'Não existe veículo com o id informado' });
    }
    const posicaoVeiculo = new PosicaoVeiculo(latitude, longitude, veiculo);
    const posicaoVeiculoSalva = await posicaoVeiculoController.create(posicaoVeiculo);
    return res.send({
      latitude: posicaoVeiculoSalva.latitude,
      longitude: posicaoVeiculoSalva.longitude,
      veiculoId: posicaoVeiculoSalva.veiculo.id,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// UPDATE
posicaoVeiculoRouter.put('/', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { veiculoId } = req.query;
    if (!veiculoId) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }
    const posicaoVeiculo = await posicaoVeiculoController.getById(Number(veiculoId));
    if (!posicaoVeiculo) {
      return res.status(400).send({ error: 'Não existe posição do veiculo com o ID informado cadastrada' });
    }
    const { latitude = 0, longitude = 0 } = {
      ...posicaoVeiculo,
      ...data,
    };
    const veiculo = await veiculoController.getById(Number(veiculoId));
    const posicaoVeiculoObject = new PosicaoVeiculo(latitude, longitude, veiculo);
    const posicaoVeiculoAtualizada = await posicaoVeiculoController.update(posicaoVeiculoObject);
    return res.send({
      latitude: posicaoVeiculoAtualizada.latitude,
      longitude: posicaoVeiculoAtualizada.longitude,
      veiculoId: posicaoVeiculoAtualizada.veiculo.id,
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// DELETE
posicaoVeiculoRouter.delete('/', async (req: Request, res: Response) => {
  try {
    const { veiculoId } = req.query;
    if (!veiculoId) {
      return res.status(400).send({ error: 'ID não informado na query' });
    }
    const posicaoVeiculo = await posicaoVeiculoController.getById(Number(veiculoId));
    if (!posicaoVeiculo) {
      return res.status(400).send({ error: 'Não existe posição do veículo com o ID informado cadastrada' });
    }
    await posicaoVeiculoController.destroy(posicaoVeiculo);
    return res.send({ success: 'Posição do Veículo deletada com sucesso' });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

export default posicaoVeiculoRouter;
