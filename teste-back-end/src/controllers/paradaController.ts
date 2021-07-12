import { getManager } from 'typeorm';
import Parada from '../entity/Parada';

const create = async (parada: Parada) => {
  const paradaSalva = await getManager().save(parada);
  return paradaSalva;
};

const getAll = async () => {
  const paradas = await getManager().find(Parada);
  return paradas;
};

const getById = async (id: number) => {
  const parada = await getManager().findOne(Parada, id);
  return parada;
};

const update = async (parada: Parada) => {
  const paradaAtualizada = await getManager().save(parada);
  return paradaAtualizada;
};

const destroy = async (parada: Parada) => {
  const paradaDeletada = await getManager().remove(parada);
  return paradaDeletada;
};

export default {
  create,
  getAll,
  getById,
  update,
  destroy,
};
