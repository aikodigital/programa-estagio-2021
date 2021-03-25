const connections= require('../database/connections')
const crypto = require('crypto');   

module.exports={
    
    //Função que retorna todos as tabelas do tipo 'veiculos'
    async indexAll(request,response){                                       
        const veiculos = await connections('veiculos').select('*');

        return response.json(veiculos);
    },
    
    //Função que dada uma id de uma tabela do tipo 'linhas' lhe retorna os dados da determinada tabela
    async indexOne(request,response){
        const { id } = request.params; 
        const linhasID = request.headers.authorization;    

        const veiculo = await connections('veiculos') 
        .where('id', id)          
        .select('linhasID')         
        .first();                  

        if (veiculo.linhasID != linhasID) {    
        return response.status(401).json({ error: 'Id não encontrada.' })
        };

        const veiculoEscolhido = await connections('veiculos') 
        .where('id', id).select('name');
        
        return response.json(veiculoEscolhido);
    },
    
    //Função de criação da tabela 'veiculos', alocando valores nas colunas provenientes da requisição no body, e para a coluna 'id' é gerada uma chave aleatória.
    async create(request,response){
        const{name, modelo} = request.body;
        
        //Cria uma chave hexadecimal aleatória no tamanho de 2 bytes para diferenciar os ids das linhas e prover uma segurança na manipulação da tabela 'veiculos' que usa tal coluna como parâmetro
        const id = crypto.randomBytes(1).toString('HEX');  
        
        //Aloca na variável 'linhasID' a 'id' proveniente da coluna 'idLinha' da tabela 'linhas', logo será alocada na coluna 'linhasID'
        const linhasID = request.headers.authorization;   
        
        await connections('veiculos').insert({
            id,
            name,
            modelo,
            linhasID,
        });
    
        
        return response.json({id}) //Retorna o ID do veículo adicionado
    },

    //Função que deleta uma tabela do tipo 'veiculos'
    async delete(request,response){
        const { id } = request.params; 
        const linhasID = request.headers.authorization;    

        const veiculo = await connections('veiculos') 
        .where('id', id)          
        .select('linhasID')         
        .first();                  

        //Condional que verifica se o valor da coluna 'linhasID' é o mesmo que o da requisição no head, caso não seja retorna um erro.
        if (veiculo.linhasID != linhasID) {    
        return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
        };
        
        //Caso não retorne o erro a função segue os seu fluxo e deleta a tabela solicitada
        await connections('veiculos').where('id', id).delete(); 

        return response.status(204).send(); 
    },
    //Função que altera os dados não gerados automáticamente na tabela do tipo 'veiculos'
    async update(request,response){
        const {id}=request.params;
        const linhasID = request.headers.authorization;
        
        const veiculo = await connections('veiculos') 
        .where('id', id)          
        .select('linhasID')         
        .first();
        
        if (veiculo.linhasID != linhasID) {    
            return response.status(401).json({ error: 'Operação não permitida, verifique a autorização.' })
            };
        
        const {name,modelo}=request.body;
        const update = await connections('veiculos').where('id',id).update({
            'name':name,
            'modelo': modelo,
        });

        return response.json(update);

    }

};