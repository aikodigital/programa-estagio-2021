const connections= require('../database/connections');

module.exports={
    //Método que recebe o 'idParada' por meio do header e a partir dele retorna todas as linhas associdas a tal parada.
    async linhasPorParada(request,response){
        const idParada = request.headers.authorization; 
        
        const linhas = await connections('linhasPorParada').where('idParada',idParada);

        return response.json(linhas);
        
    },
    //Método que recebe o 'idLinha' por meio do header e a partir dele retorna todas os veículos associados a tal linha.
    async veiculosPorLinha(request,response){
        const idLinha  = request.headers.authorization; 

        const veiculosEscolhidos = await connections('veiculos').where('linhasID', idLinha);
        return response.json(veiculosEscolhidos);
    },

    //Método que recebe retorna a distância entre uma determinada parada e um determinado veículo, sendo os veículos e paradas determinados pelos 'id' e 'idParada' enviados no body.
    async distanciaParadaPosicao(request ,response){
        const { id,idParada } = request.body; 

        var lat1 = await connections('posicaoVeiculos').where('id', id).select('latitude');
        var lon1 = await connections('posicaoVeiculos').where('id',id).select('longitude');
        var lat2 = await connections('paradas').where('idParada',idParada).select('latitude')
        var lon2 = await connections('paradas').where('idParada',idParada).select('longitude')
   
        lat1 = lat1[0].latitude;
        lon1 = lon1[0].longitude;
        lat2 =lat2[0].latitude;
        lon2 = lon2[0].longitude;
        
        var km = 6371; // Para transformar valores em quilômetragem
        
        var difLat = lat2-lat1;
        var dLat = difLat * Math.PI / 180;  
        var difLon = lon2-lon1;
        var dLon = difLon * Math.PI / 180;  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distancia = km * c; 

        return response.json(distancia.toFixed(3));
    },

    //Método que recebe sua latitude e logitude atual e retorna as paradas mais pŕoximas em ordem crescente.
    async paradaMaisProxima(request, response){
        const {latAtual , lonAtual}= request.body;
        
        const latParada = await connections('paradas').select('latitude');
        const lonParada = await connections('paradas').select('longitude');
        
        
        var [cont] = await connections('paradas').count();
        cont = cont['count(*)'];
        var ParadasMaisProximas = [];
        var idsOrdenados = [];
        for(var aux = 0; aux < cont; aux++){
            var latP = latParada[aux].latitude;
            var lonP = lonParada[aux].longitude;
            lat1 = latAtual;
            lon1 = lonAtual;
            lat2 = latP;
            lon2 = lonP;
        
            var km = 6371; // Para transformar valores em quilômetragem
        
            var difLat = lat2-lat1;
            var dLat = difLat * Math.PI / 180;  
            var difLon = lon2-lon1;
            var dLon = difLon * Math.PI / 180;  
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2);  
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var distancia = km * c; 
            if(ParadasMaisProximas.length == 0){
                ParadasMaisProximas[0] = distancia;
                idsOrdenados[0] = latP;
            }else{
                    var inserido = false
                    var cont2 = 0;
                    while(!inserido){
                        if(ParadasMaisProximas[cont2] == null){
                        ParadasMaisProximas[cont2] = distancia;
                        idsOrdenados[cont2] = latP;
                        inserido = true;
                    }
                    else if(ParadasMaisProximas[cont2] > distancia){
                        ParadasMaisProximas[cont2+1] = ParadasMaisProximas[cont2];
                        ParadasMaisProximas[cont2] = distancia;
                        idsOrdenados[cont2+1] = idsOrdenados[cont2];
                        idsOrdenados[cont2] = latP;
                        inserido = true;
                    };
                    cont2++;
                };
            };
        
        };
        var linhas = [];
        for(var aux=0; aux < cont; aux++){
            
            linhas.push(await connections('paradas').where('latitude',idsOrdenados[aux]))
        }
        return response.json(linhas);
    },

    //Método que retorna um tempo médio de espera baseado na distância do veículo do ponto de parada e da velocidade média do mesmo. Recebe o valor de 'id', 'idParada' e vMedia pelo body.
    async tempoMedioDeEspera(request,response){
        const { id,idParada } = request.body;
        var vMedia = request.body; //Pensei em setar como 16 km/h(velocidade média dos ônibus na cidade de São Paulo segundo a Folha/UOL) porém deixarei a entrada variável para testes dos avaliadores.

        var lat1 = await connections('posicaoVeiculos').where('id', id).select('latitude');
        var lon1 = await connections('posicaoVeiculos').where('id',id).select('longitude');
        var lat2 = await connections('paradas').where('idParada',idParada).select('latitude')
        var lon2 = await connections('paradas').where('idParada',idParada).select('longitude')
   
        lat1 = lat1[0].latitude;
        lon1 = lon1[0].longitude;
        lat2 =lat2[0].latitude;
        lon2 = lon2[0].longitude;
        
        var km = 6371; // Para transformar valores em quilômetragem
        
        var difLat = lat2-lat1;
        var dLat = difLat * Math.PI / 180;  
        var difLon = lon2-lon1;
        var dLon = difLon * Math.PI / 180;  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distancia = km * c; 

        vMedia = vMedia.vMedia;
        var tempo = ((distancia/vMedia)*60); //Tempo em minutos.

        
        return response.json(tempo.toFixed(2));
    },

    //Método que recebe as 'idParada' de duas paradas diferentes e retorna a distância em quilômetros entre elas.
    async distanciaEntreParadas(request,response){
        const {idParada1,idParada2} = request.body;

        var lat1 = await connections('paradas').where('idParada',idParada1).select('latitude')
        var lon1 = await connections('paradas').where('idParada',idParada1).select('longitude')
        
        var lat2 = await connections('paradas').where('idParada',idParada2).select('latitude');
        var lon2 = await connections('paradas').where('idParada',idParada2).select('longitude');

        lat1 = lat1[0].latitude;
        lon1 = lon1[0].longitude;
        lat2 =lat2[0].latitude;
        lon2 = lon2[0].longitude;
        
        var km = 6371; // Para transformar valores em quilômetragem
        
        var difLat = lat2-lat1;
        var dLat = difLat * Math.PI / 180;  
        var difLon = lon2-lon1;
        var dLon = difLon * Math.PI / 180;  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var distancia = km * c; 

        return response.json(distancia.toFixed(3));
    },

} 