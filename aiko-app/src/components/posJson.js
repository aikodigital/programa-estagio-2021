import * as busPos from "../data/posVeiculo.json";
 
export default function posJson(){
    let posData = {};
    let arrData = {
        data: []
    };

    busPos.l.map(line => (

        line.vs.map(bus => ( 

            posData = {
                id : line.cl,
                number : line.c,
                origem : line.lt0,
                destino : line.lt1,
                lat: bus.py,
                lng: bus.px,
                cod: bus.p
            }

        )),

        arrData.data.push(posData) 
    ));
    
    console.log("aqui")
    console.log(arrData);

    return arrData;
}