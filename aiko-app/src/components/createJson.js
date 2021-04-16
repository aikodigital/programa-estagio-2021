import * as busPos from "../data/posVeiculo.json";

export default function createJson(){
    const posData = [];
    posData.data = [];

    //console.log(busPos);
    //console.log("teste " + typeof(busPos));

    busPos.l.map(function(bus) {
        var dataJson = {};
        var pos = 0;

        dataJson.id = bus.cl;
        dataJson.number = bus.c;
        dataJson.origem = bus.lt0;
        dataJson.destino = bus.lt1;
        dataJson.vs = [];

        bus.vs.map(veic => {
            dataJson.vs[pos] = veic;
            pos += 1;
            return dataJson;
        })


        posData.data.push(dataJson);

        return posData;
    });

    return posData;
}