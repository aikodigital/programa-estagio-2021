import api from "./axios.js"

//Requisição das informações dos corredores
async function getLanes() {
    const res = await api.get("/Corredor");
    return res.data;
}

export default getLanes;