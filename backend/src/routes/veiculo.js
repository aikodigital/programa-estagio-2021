import { Router } from 'express';
import Veiculo from '../models/Veiculo';

const router = Router();

router.post('/store', async (req, res) => {
  try {
    const veiculo = await Veiculo.create(req.body);

    return res.status(200).json(veiculo);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/index', async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll({
      attributes: ['id', 'name', 'modelo'],
      order: [['id', 'ASC']],
    });

    if (!veiculos)
      return res
        .status(400)
        .json({ msg: 'Não existem registros de veículos.' });

    return res.status(200).json(veiculos);
  } catch (e) {
    throw new Error(e);
  }
});

router.get('/show', async (req, res) => {
  try {
    const { id } = req.query;
    const veiculo = await Veiculo.findByPk(id, {
      attributes: ['id', 'name', 'modelo'],
    });

    if (!veiculo)
      return res.status(400).json({ msg: 'Veículo não encontrado' });

    return res.status(200).json(veiculo);
  } catch (e) {
    throw new Error(e);
  }
});

router.put('/update', async (req, res) => {
  try {
    const { id } = req.query;
    const veiculo = await Veiculo.findByPk(id);

    const veiculoAtualizado = await veiculo.update(req.body);

    return res.status(200).json(veiculoAtualizado);
  } catch (e) {
    throw new Error(e);
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.query;
    const veiculo = await Veiculo.findByPk(id);

    await veiculo.destroy();

    return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
  } catch (e) {
    throw new Error(e);
  }
});

export default router;
