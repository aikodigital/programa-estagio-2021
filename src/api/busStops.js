import api from "./axios.js"

//Requisição das posições das paradas
async function getBusStops() {
    const res = await api.get(`/Parada/Buscar?termosBusca=`);
    return res.data;
}

export default getBusStops;