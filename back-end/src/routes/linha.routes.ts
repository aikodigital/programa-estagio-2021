import { Router } from 'express';

import CreateLinhaService from '../services/CreateLinhaService';

const linhaRouter = Router();

linhaRouter.post('/', async (request, response) => {
  try {
    const { Name, paradas } = request.body;

    const createLinha = new CreateLinhaService();

    const linha = await createLinha.CreateLinha({
      Name,
      paradas,
    });

    return response.json(linha);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

linhaRouter.get('/:id', async (request, response) => {
  try {
    const showId = new CreateLinhaService();

    const linha = await showId.GetByIdLinha(request.params.id);

    return response.json(linha);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

linhaRouter.get('/', async (request, response) => {
  const showLinha = new CreateLinhaService();

  const linha = await showLinha.GetAllLinhas();

  return response.json(linha);
});

linhaRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { Name, paradas } = request.body;

    const showId = new CreateLinhaService();
    const linha = await showId.GetByIdLinha(id);

    const atualizado = await showId.PutLinha(linha, {
      Name,
      paradas,
    });

    return response.json(atualizado);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

linhaRouter.delete('/:id', async (request, response) => {
  try {
    const showId = new CreateLinhaService();

    const parada = await showId.DeleteLinha(request.params.id);

    return response.json(parada);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

linhaRouter.get('/BuscarVeiculosPorLinha/:id', async (request, response) => {
  try {
    const showId = new CreateLinhaService();

    const linha = await showId.VeiculosPorLinha(request.params.id);

    return response.json(linha);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default linhaRouter;
