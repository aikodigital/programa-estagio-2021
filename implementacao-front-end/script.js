
//Gera o mapa
var mapa = L.map('mapa', {
	preferCanvas: true
}).setView([-23.550, -46.632], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2lkaXNjYWNjaWF0aSIsImEiOiJja25oc2hxYXowN2VsMnFxY2MxamZhOXBzIn0.jIB4XQHGA06EQz684svC3w'
}).addTo(mapa);

//Gera a legenda e adiciona ao mapa
var legenda = L.control({position: 'bottomleft'});

legenda.onAdd = function (mapa) {
    var div = L.DomUtil.create('div', 'legenda');
    div.innerHTML +=  '<div><strong>Legenda</strong></div>' +
    				'<i class="fas fa-map-pin"></i>' + '     Parada' + '<br>';
    return div;
};

legenda.addTo(mapa);


//Inicialização de variáveis
var url_base = 'http://api.olhovivo.sptrans.com.br/v2.1';
var token = '13c17b22c970ffc32762d74d0eaefacb192948da86285905b1c704eb0b1c137c';
var proxy = 'https://aiko-olhovivo-proxy.aikodigital.io/';

//Define o ícone que indica as paradas
var iconeParada = L.divIcon({
				html: '<i class="fas fa-map-pin"></i>',
				iconSize: [12, 12],
				className: 'myDivIcon'
			});

//Inicialização de vetores utilizados nas funções
var codigoParadas = [];
var marcadoresParadas = [];
var codigoLinhas = [];
var codigoCorredores = [];
var promises = [];
var promisesPrevisao = [];

//Requisição de autenticação
$.post(proxy+'Login/Autenticar?token='+token, function(resp){
	if(resp){
		//Requisição GET, retorna a posição dos veículos
		$.get(proxy+'Posicao?token='+token, function(resp1){
			
			for (var i = 0; i < resp1.l.length; i++) {
				//Inclui o código da linha no vetor respectivo, apenas se o código ainda não estiver presente no vetor
				if(!codigoLinhas.includes(resp1.l[i].cl)){
					codigoLinhas.push(resp1.l[i].cl);
				}
				for (var j = 0; j < resp1.l[i].vs.length; j++) {
					var lat = resp1.l[i].vs[j].py;  //Latitude do veículo
					var long = resp1.l[i].vs[j].px;  //Longitude do veículo
					var latLong = L.latLng(lat, long);  //Conversão em um objeto 'latLng'
					
					//Plota no mapa um marcador circular que indica a posição atual do veículo.
					//Um popup é adicionado a este marcador, com a informação do letreiro da linha.
					L.circleMarker(latLong, {
					    color: '#00FFFF',
					    radius: 3
					  }).addTo(mapa)
						.bindPopup(resp1.l[i].c);
				}
			}
		});

		//Requisição GET, retorna a informação dos corredores
		$.get(proxy+'Corredor?token='+token, function(resp1){
			//Inclui o código do corredor em um vetor, se este código ainda não estiver presente
			for (var i = 0; i < resp1.length; i++) {
				if(!codigoCorredores.includes(resp1[i].cc)){
					codigoCorredores.push(resp1[i].cc);
				}
			}

			//Aqui é usado o método GET, incluindo a resposta em um vetor.
			//Usado desta forma pois a requisição leva um certo tempo e,
			//caso usada dentro de um loop 'for', o loop continua antes da
			//requisição terminar
			for (var i = 0; i < codigoCorredores.length; i++){
				promises.push($.get(proxy+'Parada/BuscarParadasPorCorredor?codigoCorredor='+codigoCorredores[i]+'&token='+token, function(resp2){
					})
				);
				
			}

			//Quando as requisições anteriores terminarem, executa este bloco
			$.when.apply(null, promises).done(function(){
				
				for (var i = 0; i<promises.length; i++){
					for (var j = 0; j < promises[i].responseJSON.length; j++){
						//Inclui o código das paradas em um vetor
						if(!codigoParadas.includes(promises[i].responseJSON[j].cp)){
							codigoParadas.push(promises[i].responseJSON[j].cp);
						}
						//Recebe as coordenadas da parada e converte em um objeto latLng
						var latLongParada = L.latLng(promises[i].responseJSON[j].py, promises[i].responseJSON[j].px);
						//Adiciona os marcadores das paradas no mapa
						var marker = L.marker(latLongParada,{
							icon: iconeParada
						}).addTo(mapa)
						.bindPopup(promises[i].responseJSON[j].np); //Adiciona um popup que mostra o nome da parada ao clicar nela.
					}
				}
				
			});
			
			
			

		});

		//Faz a pesquisa da linha após o usuário digitar no campo de busca e apertar Enter
		$('#linha').on('keyup', function(e){
			if(e.key === 'Enter' || e.key === 13){
				$("#linha_info").empty();
				var linha = $('#linha').val();
				//Requisição GET, obtém os dados da linha 
				$.get(proxy + 'Linha/Buscar?termosBusca=' + linha + '&token=' + token, function(resp1){
					//Caso não retorne nenhum valor
					if(resp1.length === 0){
						$("#linha_info").append('<div>Linha não encontrada!</div>');
					}
					//Caso contrário, pega os dados apenas do primeiro item do vetor, pois pode haver linhas repetidas
					else{
						var letreiro = resp1[0].lt + '-' + resp1[0].tl;
						var circular = resp1[0].lc;
						if(resp1[0].sl === 1){
							var origem = resp1[0].ts;
							var destino = resp1[0].tp;
						}
						else{
							var origem = resp1[0].tp;
							var destino = resp1[0].ts;
						}
						var codigo = resp1[0].cl;

						//Inclui as informações no HTML
						$("#linha_info").append('<div>Letreiro: ' + letreiro + '</div>');
						$("#linha_info").append('<div>Circular: ' + (circular === true ? 'Sim' : 'Não') + '</div>');
						$("#linha_info").append('<div>Origem: ' + origem + '</div>');
						$("#linha_info").append('<div>Destino: ' + destino + '</div>');
						$("#linha_info").append('<table><tr><th>Lista de Paradas:</th></tr>');

						//Requisição GET. Busca as paradas atendidas pela linha
						$.get(proxy + 'Parada/BuscarParadasPorLinha?codigoLinha='+codigo+'&token='+token, function(paradas){
							//console.log(paradas);
							for(var i=0; i<paradas.length; i++){
								$("#linha_info").append('<tr><td>'+paradas[i].np+'</td></tr>');
							}
							$("#linha_info").append('</table>');
						})
					}
				});
			}
		});

		//Faz a pesquisa de uma parada após o usuário digitar e apertar Enter
		$('#parada').on('keyup', function(e){
			if(e.key === 'Enter' || e.key === 13){
				$("#parada_info").empty();
				var parada = $('#parada').val();
				//Requisição GET. obtém os dados da parada
				$.get(proxy+'Parada/Buscar?termosBusca='+parada+'&token='+token, function(resp1){
					//Caso não retorne nenhum valor
					if(resp1.length === 0){
						$("#parada_info").append('<div>Parada não encontrada!</div>');
					}
					//Caso contrário, pega os dados do primeiro item do vetor
					else{
						var codigo = resp1[0].cp;
						//Requisição GET. Obtém a previsão de chegada de todos os veículos que usam aquela parada
						$.get(proxy + 'Previsao/Parada?codigoParada=' + codigo + '&token=' + token, function(resp2){
							var nome = resp2.p.np;
							$("#parada_info").append('<div>Nome da Parada: ' + nome + '</div>');
							for(var i=0; i<resp2.p.l.length; i++){
								for(var j=0; j<resp2.p.l[i].vs.length; j++){
									$("#parada_info").append('<div>Linha: '+resp2.p.l[i].c + '  |  Horário: '+ resp2.p.l[i].vs[j].t +'</div>');
									
								}
							}
						});
					}
					
				});
			}
		});

	}		
});