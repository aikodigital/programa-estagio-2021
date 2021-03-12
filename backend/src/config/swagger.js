module.exports = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'API backend Aiko',
      description: 'API semelhante à olho vivo',
      contact: {
        name: 'Paulo Sérgio',
      },
      servers: ['http://localhost:3333'],
    },
  },
  // ['.routes/*.js']
  apis: [
    'src/app.js',
    'src/routes/linha.js',
    'src/controllers/LinhaController.js',
    'src/controllers/ParadaController.js',
    'src/controllers/VeiculoController.js',
    'src/controllers/PosicaoController.js',
  ],
};
