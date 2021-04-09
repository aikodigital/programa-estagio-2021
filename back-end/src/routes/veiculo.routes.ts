import { Router } from 'express';

import CreateVeiculoService from '../services/CreateVeiculoService';

const veiculoRouter = Router();

veiculoRouter.post('/', async (request, response) => {
  try {
    const { Name, Modelo, linhaId } = request.body;

    const createVeiculo = new CreateVeiculoService();

    const veiculo = await createVeiculo.CreateVeiculo({
      Name,
      Modelo,
      linhaId,
    });

    return response.json(veiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

veiculoRouter.get('/:id', async (request, response) => {
  try {
    const showId = new CreateVeiculoService();

    const veiculo = await showId.GetByIdVeiculo(request.params.id);

    return response.json(veiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

veiculoRouter.get('/', async (request, response) => {
  const showVeiculo = new CreateVeiculoService();

  const veiculo = await showVeiculo.GetAllVeiculos();

  return response.json(veiculo);
});

veiculoRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { Name, Modelo } = request.body;

    const showId = new CreateVeiculoService();
    const veiculo = await showId.GetByIdVeiculo(id);

    const r = await showId.PutVeiculo(veiculo, {
      Name,
      Modelo,
    });

    return response.json(r);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

veiculoRouter.delete('/:id', async (request, response) => {
  try {
    const showId = new CreateVeiculoService();

    const veiculo = await showId.DeleteVeiculo(request.params.id);

    return response.json(veiculo);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default veiculoRouter;
