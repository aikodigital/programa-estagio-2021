const connections= require('../database/connections')
const crypto = require('crypto');  
const { update } = require('./veiculosController');

module.exports={
    //Função que retorna todos as tabelas do tipo 'paradas'
    async indexAll(request,response){                                       
        const paradas = await connections('paradas').select('*');

        return response.json(paradas);
    },
    
    //Função que dada uma id de uma tabela do tipo 'paradas' lhe retorna os dados da determinada tabela
    async indexOne(request,response){                                       
        
        const { idParada } = request.params; 
        const paradaID = request.headers.authorization;    

        const parada = await connections('paradas') 
        .where('idParada', idParada)          
        .select('idParada')         
        .first();                  

        if (parada.idParada != paradaID) {    
        return response.status(401).json({ error: 'Operation not permitted.' })
        };

        const paradaEscolhida = await connections('paradas') 
        .where('idParada', idParada);
        
        return response.json(paradaEscolhida);
    },
    
    //Função de criação da tabela 'paradas', alocando valores nas colunas provenientes da requisição no body, e para a coluna 'idParada' é gerada uma chave aleatória.
    async create(request,response){
        const{ name, latitude, longitude} = request.body;

        //Cria uma chave hexadecimal aleatória no tamanho de 2 bytes para diferenciar os ids das paradas e prover uma segurança na manipulação da tabela 'linhas' que usa tal coluna como parâmetro
        const idParada = crypto.randomBytes(2).toString('hex'); 

        await connections('paradas').insert({
            idParada,
            name,
            latitude,
            longitude,
            
        });
    
        return response.json({idParada}) //Retorna o ID da parada adicionado
    },

    //Função que deleta uma tabela do tipo 'paradas'
    async delete(request,response){
        const { idParada } = request.params; 
        const paradaID = request.headers.authorization;    

        const parada = await connections('paradas') 
        .where('idParada', idParada)          
        .select('idParada')         
        .first();                  

        //Condional que verifica se o valor da coluna 'idParada' é o mesmo que o da requisição no head, caso não seja retorna um erro.
        if (parada.idParada != paradaID) {     
        return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
        };
        
        //Caso não retorne o erro a função segue os seu fluxo e deleta a tabela solicitada
        await connections('paradas').where('idParada', idParada).delete(); 
        await connections('linhasPorParada').where('idParada',idParada).delete();

        return response.status(204).send(); 
    },
    //Função que altera os dados não gerados automáticamente na tabela do tipo 'paradas'
    async update(request,response){
        const { idParada } = request.params; 
        const paradaID = request.headers.authorization;    

        const parada = await connections('paradas') 
        .where('idParada', idParada)          
        .select('idParada')         
        .first();                  

        //Condional que verifica se o valor da coluna 'idParada' é o mesmo que o da requisição no head, caso não seja retorna um erro.
        if (parada.idParada != paradaID) {     
        return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
        };

        const {name,latitude,longitude}=request.body;
        const update = await connections('paradas').where('idParada',idParada).update({
            'name':name,
            'latitude': latitude,
            'longitude': longitude,
        });

        return response.json(update);


    }
}