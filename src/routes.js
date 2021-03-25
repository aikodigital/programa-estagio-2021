const express = require('express');
const veiculosController = require('./controllers/veiculosController');
const paradasController = require('./controllers/paradasController');
const posicaoController = require('./controllers/posicaoController');
const linhasController = require('./controllers/linhasController');
const metodosController = require('./controllers/metodosController');
const routes = express.Router();

//Metodos para os veículos
routes.post('/veiculos', veiculosController.create);               //Método post com a finalidade da criação de uma tabela de 'veiculos'
routes.get('/veiculos', veiculosController.indexAll);             //Método get cuja finalidade é retornar todas as tabelas do tipo 'veiculos'
routes.get('/veiculos/:id', veiculosController.indexOne);        //Método get que a partir da ID passada na rota retorna todas a colunas da tabela 'veiculos'
routes.delete('/veiculos/:id', veiculosController.delete);      //Método delete, tem como finalidade a deleção de uma tabela 'veiculos'
routes.put('/veiculos/:id', veiculosController.update);

//Metodos para paradas
routes.post('/paradas', paradasController.create);                 //Método post com a finalidade da criação de uma tabela de 'paradas'
routes.get('/paradas', paradasController.indexAll);               //Método get cuja finalidade é retornar todas as tabelas do tipo 'paradas'
routes.get('/paradas/:idParada', paradasController.indexOne);    //Método get que a partir da ID passada na rota retorna todas a colunas da tabela 'paradas'
routes.delete('/paradas/:idParada',paradasController.delete);   //Método delete, tem como finalidade a deleção de uma tabela 'paradas'
routes.put('/paradas/:idParada',paradasController.update);

//Metodos para posicaoVeiculos
routes.post('/posicaoVeiculo', posicaoController.create);           //Método post com a finalidade da criação de uma tabela de 'posicaoVeiculo'
routes.get('/posicaoVeiculo', posicaoController.indexAll);         //Método get cuja finalidade é retornar todas as tabelas do tipo 'posicaoVeiculo'
routes.get('/posicaoVeiculo/:id', posicaoController.indexOne);    //Método get que a partir da ID passada na rota retorna todas a colunas da tabela 'posicaoVeiculo'
routes.delete('/posicaoVeiculo/:id',posicaoController.delete);   //Método delete, tem como finalidade a deleção de uma tabela 'posicaoVeiculo'
routes.put('/posicaoVeiculo/:id',posicaoController.update);

//Metrodos para linhas
routes.post('/linhas', linhasController.create);                   //Método post com a finalidade da criação de uma tabela de 'linhas'
routes.get('/linhas', linhasController.indexAll);                 //Método get cuja finalidade é retornar todas as tabelas do tipo 'linhas'
routes.get('/linhas/:idLinha', linhasController.indexOne);       //Método get que a partir da ID passada na rota retorna todas a colunas da tabela 'linhas'
routes.delete('/linhas/:idLinha', linhasController.delete);     //Método delete, tem como finalidade a deleção de uma tabela 'linhas'
routes.put('/linhas/:idLinha', linhasController.update);

//Métodos requisitados
routes.get('/linhasPorParada', metodosController.linhasPorParada);
routes.get('/veiculos/linhas/:idLinha', metodosController.veiculosPorLinha);
routes.post('/distanciaParadaPosicao', metodosController.distanciaParadaPosicao);
routes.post('/paradaMaisProxima', metodosController.paradaMaisProxima);
routes.post('/tempoMedioDeEspera', metodosController.tempoMedioDeEspera);
routes.post('/distanciaEntreParadas', metodosController.distanciaEntreParadas);



module.exports = routes;