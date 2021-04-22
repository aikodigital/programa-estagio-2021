import api from "./axios.js"

//Requisição das informações das linhas dado um determinado filtro.
async function getLines(filter) {
    const res = await api.get(`/Linha/Buscar?termosBusca=${filter}`);
    const data = res.data.map(line => {
        //Caso seja sentido do Terminal secundário para principal, inverte para melhor visualização na tabela.
        if (line.sl === 2) {
            const tp = line.ts;
            const ts = line.tp;
            return {
                cl: line.cl,
                lc: (line.lc ? 'Sim' : 'Não'),//Teste se é uma linha circular ou não.
                lt: `${line.lt}-${line.tl}`,//Letreiro completo.
                tp: ts,
                ts: tp
            }
        }
        return {
            cl: line.cl,
            lc: (line.lc ? 'Sim' : 'Não'),
            lt: `${line.lt}-${line.tl}`,
            tp: line.tp,
            ts: line.ts
        }
    })
    return data
}

export default getLines;