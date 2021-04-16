const axios = require('axios');

async function getUser() {

    try {
        const res = await axios.post(`http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar`, { 
            params: {
                token: "821855ada8869fc50b88047857e4df9b0c2871e75e699f247341bc253e56220c",
            },
            proxy: {
                host: 'https://aiko-olhovivo-proxy.aikodigital.io/',
            }
        });
        console.log(res);
    } catch (error) {
      console.error(error);
    }
}


export default getUser;
