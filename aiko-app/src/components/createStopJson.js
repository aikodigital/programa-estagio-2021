import Api from "../api/api"; 

export default async function stopPrevJson(info){
    const busPos = await Api.getPrevisao(info);

    let posData = {};
    let arrData = [];

    busPos && busPos.p.l.map(bus => ( 
            
            bus.vs.map(item => (
                posData = {
                    cp: busPos.p.cp,
                    np: busPos.p.np,
                    c: bus.c,
                    cl: bus.cl,
                    sl: bus.sl,
                    lt0: bus.lt0,
                    lt1: bus.lt1,
                    qv: bus.qv,
                    p: item.p,
                    t: item.t,
                    ta: item.ta,
                    py: item.py,
                    px: item.px,
                }
        // eslint-disable-next-line no-sequences
        )),

        arrData.push(posData) 
    ));

    return arrData;
}