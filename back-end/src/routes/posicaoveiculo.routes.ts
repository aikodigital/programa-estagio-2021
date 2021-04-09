import { Router } from 'express';

import CreatePosicaoVeiculoService from '../services/CreatePosicaoVeiculoService';

const posicaoveiculoRouter = Router();

posicaoveiculoRouter.post('/', async (request, response) => {
  try {
    const { Latitude, Longitude, veiculoId } = request.body;

    const createPosicaoVeiculo = new CreatePosicaoVeiculoService();

    const posicaoveiculo = await createPosicaoVeiculo.CreatePosicaoVeiculo({
      Latitude,
      Longitude,
      veiculoId,
    });

    return response.json(posicaoveiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

posicaoveiculoRouter.get('/:id', async (request, response) => {
  try {
    const showId = new CreatePosicaoVeiculoService();

    const posicaoveiculo = await showId.GetByIdPosicaoVeiculo(request.params.id);

    return response.json(posicaoveiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

posicaoveiculoRouter.get('/', async (request, response) => {
  const showPosicaoVeiculo = new CreatePosicaoVeiculoService();

  const posicaoveiculo = await showPosicaoVeiculo.GetAllPosicaoVeiculo();

  return response.json(posicaoveiculo);
});

posicaoveiculoRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { Latitude, Longitude } = request.body;

    const showId = new CreatePosicaoVeiculoService();

    const posicaoveiculo = await showId.GetByIdPosicaoVeiculo(id);

    const r = await showId.PutPosicaoVeiculo(posicaoveiculo, {
      Latitude,
      Longitude,
    });
    return response.json(r);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

posicaoveiculoRouter.delete('/:id', async (request, response) => {
  try {
    const showId = new CreatePosicaoVeiculoService();

    const posicaoveiculo = await showId.DeletePosicaoVeiculo(request.params.id);

    return response.json(posicaoveiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default posicaoveiculoRouter;
