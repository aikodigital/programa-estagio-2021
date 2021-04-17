import axios from 'axios';

const api = axios.create({baseURL: 'https://aiko-olhovivo-proxy.aikodigital.io/'})

export default api;