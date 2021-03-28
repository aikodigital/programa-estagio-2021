const connections= require('../database/connections')

module.exports={
    
    //Função que retorna todos as tabelas do tipo 'posicaoVeiculos'
    async indexAll(request,response){                                               
        const posicaoVeiculos = await connections('posicaoVeiculos').select('*');

        return response.json(posicaoVeiculos);
    },
    
    //Função que dada uma id de uma tabela do tipo 'posicaoVeiculos' lhe retorna os dados da determinada tabela
    async indexOne(request,response){                                               
        const { id } = request.params; 
        const veiculoID = request.headers.authorization;    

        const posicao = await connections('posicaoVeiculos') 
        .where('id', id)          
        .select('veiculoID')         
        .first();                  

        if (posicao.veiculoID != veiculoID) {    
        return response.status(401).json({ error: 'Operation not permitted.' })
        };

        const posicaoEscolhida = await connections('posicaoVeiculos').where('id', id); 

        return response.json(posicaoEscolhida);
    },
    
    //Função de criação de tabelas do tipo 'posicaoVeiculos, recebendo atribuições de valores provenientes do body e da coluna 'id' da tabela 'veiculos'
    async create(request,response){
        const{latitude, longitude} = request.body;

        const veiculoID = request.headers.authorization;
        
        await connections('posicaoVeiculos').insert({
            latitude,
            longitude,
            veiculoID,
            
        });
    
        return response.json({latitude,longitude,veiculoID}) //Retorna o ID do veículo adicionado
    },

    //Função que deleta uma tabela do tipo 'posicaoVeiculos'
    async delete(request,response){
        const { id } = request.params; 
        const veiculoID = request.headers.authorization;    

        const posicao = await connections('posicaoVeiculos') 
        .where('id', id)          
        .select('veiculoID')         
        .first();                  

        //Condional que verifica se o valor da coluna 'veiculoID' é o mesmo que o da requisição no head, caso não seja retorna um erro.
        if (posicao.veiculoID != veiculoID) {    
        return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
        };

        //Caso não retorne o erro a função segue os seu fluxo e deleta a tabela solicitada
        await connections('posicaoVeiculos').where('id', id).delete(); 

        return response.status(204).send(); 
    },

    //Função que altera os dados não gerados automáticamente na tabela do tipo 'posicaoVeiculos'
    async update(request,response){
        const { id } = request.params; 
        const veiculoID = request.headers.authorization;    

        const posicao = await connections('posicaoVeiculos') 
        .where('id', id)          
        .select('veiculoID')         
        .first();                  

        //Condional que verifica se o valor da coluna 'veiculoID' é o mesmo que o da requisição no head, caso não seja retorna um erro.
        if (posicao.veiculoID != veiculoID) {    
        return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
        };

        const {latitude,longitude}=request.body;
        const update = await connections('posicaoVeiculos').where('id',id).update({
            'latitude':latitude,
            'longitude': longitude,
        });

        return response.json(update);

    }
}