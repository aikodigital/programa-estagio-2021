import Api from "./api";

const getLinhas = (linha) => {
  return Api().get(`/Linha/Buscar?termosBusca=${linha}`);
};

export { getLinhas };
