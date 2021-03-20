const connections= require('../database/connections')

module.exports={
    async index(request,response){
        const posicaoVeiculos = await connections('posicaoVeiculos').select('*');

        return response.json(posicaoVeiculos);
    },
    
    
    
    async create(request,response){
        const{ latitude, longitude} = request.body;

        const veiculoID = request.headers.authorization;
        await connections('posicaoVeiculos').insert({
            latitude,
            longitude,
            veiculoID,
            
        });
    
        return response.json({latitude,longitude}) //Retorna o ID do veículo adicionado
    }
}