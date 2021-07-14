import { getManager } from 'typeorm';
import Linha from '../entity/Linha';

const create = async (linha: Linha) => {
  const linhaSalva = await getManager().save(linha);
  return linhaSalva;
};

const getAll = async () => {
  const linhas = await getManager().find(Linha, {
    relations: ['paradas'],
  });
  return linhas;
};

const getById = async (id: number) => {
  const linha = await getManager().findOneOrFail(Linha, id, {
    relations: ['paradas'],
  });
  return linha;
};

const getVeiculos = async (id: number) => {
  const linha = await getManager().findOneOrFail(Linha, id, {
    relations: ['veiculos'],
  });
  return linha.veiculos;
};

const update = async (linha: Linha) => {
  const linhaAtualizada = await getManager().save(linha);
  return linhaAtualizada;
};

const destroy = async (linha: Linha) => {
  const linhaDeletada = await getManager().remove(linha);
  return linhaDeletada;
};

export default {
  create,
  getAll,
  getById,
  update,
  destroy,
  getVeiculos,
};
