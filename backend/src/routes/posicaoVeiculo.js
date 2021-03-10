import { Router } from 'express';
import PosicaoVeiculo from '../models/PosicaoVeiculo';

const router = Router();

router.post('/store', async (req, res) => {
  try {
    const posicaoVeiculo = await PosicaoVeiculo.create(req.body);

    return res.status(200).json(posicaoVeiculo);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/index', async (req, res) => {
  try {
    const posicaoVeiculo = await PosicaoVeiculo.findAll({
      attributes: ['id', 'latitude', 'longitude', 'veiculo_id'],
      order: [['id', 'ASC']],
    });

    if (!posicaoVeiculo)
      return res
        .status(400)
        .json({ msg: 'Não existem registros de de posições de veículos.' });

    return res.status(200).json(posicaoVeiculo);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/show', async (req, res) => {
  try {
    const { id } = req.query;

    const posicaoVeiculo = await PosicaoVeiculo.findByPk(id, {
      attributes: ['id', 'latitude', 'longitude', 'veiculo_id'],
    });

    if (!posicaoVeiculo)
      return res.status(400).json({ msg: 'Posição de veículo não encontrada' });

    return res.status(200).json(posicaoVeiculo);
  } catch (e) {
    throw new Error(e);
  }
});

router.put('/update', async (req, res) => {
  try {
    const { id } = req.query;
    const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

    const posicaoAtualizada = await posicaoVeiculo.update(req.body);

    return res.status(200).json(posicaoAtualizada);
  } catch (e) {
    throw new Error(e);
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.query;
    const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

    await posicaoVeiculo.destroy();

    return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
  } catch (e) {
    throw new Error(e);
  }
});

export default router;
