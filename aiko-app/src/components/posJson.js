import Api from "../api/api"; 

export default async function posJson(){
    const busPos = await Api.getPos();
    console.log({busPos});

    let posData = {};
    let arrData = {
        data: []
    };

     busPos && busPos.l.map(line => (

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

        // eslint-disable-next-line no-sequences
        )),

        arrData.data.push(posData) 
    ));
    
    console.log("aqui")
    console.log(arrData);

    return arrData;
}