const connections= require('../database/connections')
const crypto = require('crypto');  

module.exports={
    
    async index(request,response){
        const linhas = await connections('linhas').select('*');

        return response.json(linhas);
    },
    
    
    
    async create(request,response){
        const{ name, p1, p2, p3 } = request.body;

        const idLinha = crypto.randomBytes(1).toString('HEX'); //Cria uma chave hexadecimal de 1byte para diferenciar os ids das linhas
        const paradas =[p1,p2,p3];
        await connections('linhas').insert({
            idLinha,
            name,
            paradas,
        });
    
        return response.json({idLinha,paradas}) //Retorna o ID da linha adicionada
    }

}