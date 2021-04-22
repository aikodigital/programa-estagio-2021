import axios from 'axios';
//Cconfigurando o cliente HTTP
const BASE_URL = 'https://aiko-olhovivo-proxy.aikodigital.io/'
const authenticatedApi = axios.create({ baseURL: BASE_URL });
const unauthenticatedApi = axios.create({ baseURL: BASE_URL });

//Intercepta cada requisição, realizando a autenticação
authenticatedApi.interceptors.request.use(async (config) => {
    await unauthenticatedApi.post(`/Login/Autenticar?token=${process.env.TOKEN}`);
    return config
})

export default authenticatedApi;