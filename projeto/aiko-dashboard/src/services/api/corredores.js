import Api from "./api";

const getCorredores = () => {
  return Api().get(`/Corredor`);
};

export { getCorredores };
