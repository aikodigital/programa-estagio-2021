import Api from "./api";

const getPosCarros = () => {
  return Api().get("/Posicao");
};

const getPosCarrosLinha = (linha) => {
  return Api().get(`/Posicao/Linha?codigoLinha=${linha}`);
};

export { getPosCarros, getPosCarrosLinha };
