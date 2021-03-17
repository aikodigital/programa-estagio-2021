import Api from "./api";

const getParadas = (termo) => {
  return Api().get(`/Parada/Buscar?termosBusca=${termo}`);
};

export { getParadas };
