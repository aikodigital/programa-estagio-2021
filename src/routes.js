const express = require('express');
const veiculosController = require('./controllers/veiculosController');
const paradasController = require('./controllers/paradasController');
const posicaoController = require('./controllers/posicaoController');
const linhasController = require('./controllers/linhasController');
const routes = express.Router();

//Metodos para os veículos
routes.post('/veiculos', veiculosController.create);
routes.get('/veiculos', veiculosController.index);

//Metodos para paradas
routes.post('/paradas', paradasController.create);
routes.get('/paradas', paradasController.index);

//Metodos para posicaoVeiculos
routes.post('/posicaoVeiculo', posicaoController.create);
routes.get('/posicaoVeiculo', posicaoController.index);

//Metrodos para linhas
routes.post('/linhas', linhasController.create);
routes.get('/linhas', linhasController.index);

module.exports = routes;