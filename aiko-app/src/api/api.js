const axios = require('axios');

class Api{

  async postApi() {

    try {
        const res = await axios.post(`https://aiko-olhovivo-proxy.aikodigital.io/Login/Autenticar`, {},
        {params: {
          token: process.env.REACT_APP_SPTRANS_KEY
        }})
        console.log(res.status);
  
    } catch (error) {
      console.error(error);
    }
  }

  async getPos(){
    try {
      const res = await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Posicao`)
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.error(error);
      return false;
    }

  }

  async getLinhas(info){
    try {
      const res = await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Linha/Buscar`, 
      {params: {
        termosBusca: info
      }}
      )
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.error(error);
      return false;
    }

  }

  async getParadas(info){
    try {
      const res = await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Parada/Buscar`, 
      {params: {
        termosBusca: info
      }}
      )
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.error(error);
      return false;
    }

  }

  async getPrevisao(info){
    try {
      const res = await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Previsao/Parada`, 
      {params: {
        codigoParada: info
      }}
      )
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.error(error);
      return false;
    }

  }
}

export default new Api()
