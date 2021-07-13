import { getManager } from 'typeorm';
import Veiculo from '../entity/Veiculo';

const create = async (veiculo: Veiculo) => {
  const veiculoSalvo = await getManager().save(veiculo);
  return veiculoSalvo;
};

const getAll = async () => {
  const veiculos = await getManager().find(Veiculo, {
    relations: ['linha'],
  });
  return veiculos;
};

const getById = async (id: number) => {
  const veiculo = await getManager().findOne(Veiculo, id, {
    relations: ['linha'],
  });
  return veiculo;
};

const update = async (veiculo: Veiculo) => {
  const veiculoAtualizado = await getManager().save(veiculo);
  return veiculoAtualizado;
};

const destroy = async (veiculo: Veiculo) => {
  const veiculoDeletado = await getManager().remove(veiculo);
  return veiculoDeletado;
};

export default {
  create,
  getAll,
  getById,
  update,
  destroy,
};
