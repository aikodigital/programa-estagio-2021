const { Router } = require('express');
const ParadaController = require('./controllers/paradasControllers');
const LinhasController = require('./controllers/linhasControllers');
const VeiculoController = require('./controllers/veiculosControllers');
const routes = Router();
 
routes.get('/parada', ParadaController.index);
routes.get('/parada/:id', ParadaController.show);
routes.post('/parada', ParadaController.add);
routes.put('/parada/:id', ParadaController.update);
routes.delete('/parada/:id', ParadaController.delete);

routes.get('/linhas', LinhasController.index);
routes.get('/linhas/:id', LinhasController.show);
routes.post('/linhas', LinhasController.add);
routes.put('/linhas/:id', LinhasController.update);
routes.delete('/linhas/:id', LinhasController.delete);

routes.get('/veiculo', VeiculoController.index);
routes.get('/veiculo/:id', VeiculoController.show);
routes.post('/veiculo', VeiculoController.add);
routes.put('/veiculo/:id', VeiculoController.update);
routes.delete('/veiculo/:id', VeiculoController.delete);
 
module.exports = routes;