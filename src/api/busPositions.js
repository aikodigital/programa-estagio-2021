import api from "./axios.js"

//Requisição das posições dos veículos, lançando uma exceção caso a resquisição venha null.
async function getBusPositions() {
    
    const res = await api.get("/Posicao");
    const {data} = res;
    if (!data) {
        throw new Error("No bus positions were returned.");
    }
    const busPositions = [];
    res.data.l.forEach(line => {
        line.vs.forEach(vehicle => {
            busPositions.push({
                p:vehicle.p,
                py:vehicle.py,
                px:vehicle.px
            });
        })
    });
    return busPositions;
}

export default getBusPositions;