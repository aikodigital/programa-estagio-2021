import api from "./axios.js"

//Requisição das previsões de chegada, dada uma determinada parada.
async function getPredictions(stop) {
    //Filtro em branco tornasse '1', para a requisição não falhar e retornar null.
    if (stop === '') {
        stop = '1';
    }
    const res = await api.get(`/Previsao/Parada?codigoParada=${stop}`);
    const {data} = res;
    const predictions = [];
    //Caso requisição venha um vetor vazio, garante a não entrada no loop e retorna um vetor vazio.
    if (data.p){
        data.p.l.forEach(line => {
            line.vs.forEach(vehicle => {
                predictions.push({
                    cl: line.cl,
                    c: line.c,
                    p: vehicle.p,
                    a: (vehicle.a ? "Sim" : "Não"),//Teste se é um veículo adaptado ou não.
                    t: vehicle.t
                });
            })
        });
    }
    return predictions;
}

export default getPredictions;