import Api from "./api";

const getPrevisao = (cod) => {
  return Api().get(`/Previsao/Parada?codigoParada=${cod}`);
};

export { getPrevisao };
