import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://aiko-olhovivo-proxy.aikodigital.io/",
  });
};
