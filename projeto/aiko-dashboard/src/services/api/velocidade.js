import Api from "./api";

const getVelocidade = () => {
  return Api().get("/KMZ", {
    responseType: "blob", //arraybuffer
  });
};

export { getVelocidade };
