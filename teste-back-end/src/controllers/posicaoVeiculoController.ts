import { getManager } from 'typeorm';
import PosicaoVeiculo from '../entity/PosicaoVeiculo';

const create = async (posicaoVeiculo: PosicaoVeiculo) => {
  const posicaoVeiculoSalva = await getManager().save(posicaoVeiculo);
  return posicaoVeiculoSalva;
};

const getAll = async () => {
  const posicaoVeiculos = await getManager().find(PosicaoVeiculo, {
    relations: ['veiculo'],
  });
  return posicaoVeiculos;
};

const getById = async (veiculoId: number) => {
  const posicaoVeiculo = await getManager().findOneOrFail(PosicaoVeiculo, veiculoId, {
    relations: ['veiculo'],
  });
  return posicaoVeiculo;
};

const update = async (posicaoVeiculo: PosicaoVeiculo) => {
  const posicaoVeiculoAtualizado = await getManager().save(posicaoVeiculo);
  return posicaoVeiculoAtualizado;
};

const destroy = async (posicaoVeiculo: PosicaoVeiculo) => {
  const posicaoVeiculoDeletado = await getManager().remove(posicaoVeiculo);
  return posicaoVeiculoDeletado;
};

export default {
  create,
  getAll,
  getById,
  update,
  destroy,
};
