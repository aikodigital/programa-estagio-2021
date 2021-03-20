const connections= require('../database/connections')
const crypto = require('crypto');  

module.exports={
    async index(request,response){
        const paradas = await connections('paradas').select('*');

        return response.json(paradas);
    },
    
    
    
    async create(request,response){
        const{ name, latitude, longitude} = request.body;

        const idParada = crypto.randomBytes(1).toString('HEX'); //Cria uma chave hexadecimal de 2 bytes para diferenciar os ids das paradas

        await connections('paradas').insert({
            idParada,
            name,
            latitude,
            longitude,
            
        });
    
        return response.json({idParada}) //Retorna o ID da parada adicionado
    }
}