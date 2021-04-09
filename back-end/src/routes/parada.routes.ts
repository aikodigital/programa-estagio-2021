import { Router } from 'express';

import CreateParadaService from '../services/CreateParadaService';

const paradaRouter = Router();

paradaRouter.post('/', async (request, response) => {
  try {
    const { Name, Latitude, Longitude } = request.body;

    const createParada = new CreateParadaService();

    const parada = await createParada.CreateLinhaService({
      Name,
      Latitude,
      Longitude,
    });

    return response.json(parada);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

paradaRouter.get('/:id', async (request, response) => {
  try {
    const showId = new CreateParadaService();

    const parada = await showId.GetByIdParada(request.params.id);

    return response.json(parada);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

paradaRouter.get('/', async (request, response) => {
  const showParada = new CreateParadaService();

  const parada = await showParada.GetAllParadas();

  return response.json(parada);
});

paradaRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { Name, Latitude, Longitude } = request.body;

    const showId = new CreateParadaService();
    const parada = await showId.GetByIdParada(id);

    const atualizado = await showId.PutLinha(parada, {
      Name,
      Longitude,
      Latitude,
    });

    return response.json(atualizado);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

paradaRouter.delete('/:id', async (request, response) => {
  try {
    const showId = new CreateParadaService();

    const parada = await showId.DeleteParada(request.params.id);

    return response.json(parada);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

paradaRouter.get('/BuscarLinhasPorParada/:id', async (request, response) => {
  try {
    const showId = new CreateParadaService();

    const linha = await showId.LinhasPorParada(request.params.id);

    return response.json(linha);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default paradaRouter;
