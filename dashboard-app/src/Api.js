export const URL = 'https://aiko-olhovivo-proxy.aikodigital.io'; //URL raiz para as requisições
export const API_KEY = process.env.REACT_APP_API_KEY; // Key da API OLHO VIVO 

export function AUTH_TOKEN(){
    return{
        url: `${URL}/Login/Autenticar?token=${API_KEY}`,
        options: {
            method: 'POST',
        }
    }
}

//posição dos veículos
export function GET_POSICAO(){
    return{
        url: `${URL}/Posicao`,
    }
}