const connections= require('../database/connections')
const crypto = require('crypto');  

module.exports={
    
    async index(request,response){
        const veiculos = await connections('veiculos').select('*');

        return response.json(veiculos);
    },
    
    
    
    async create(request,response){
        const{ name, modelo, linhasID} = request.body;

        const id = crypto.randomBytes(2).toString('HEX'); //Cria uma chave hexadecimal de 4bytes para diferenciar os ids dos veículos

        await connections('veiculos').insert({
            id,
            name,
            modelo,
            linhasID,
        });
    
        return response.json({id}) //Retorna o ID do veículo adicionado
    }




}