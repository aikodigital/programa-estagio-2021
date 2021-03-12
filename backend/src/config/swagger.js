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
    'swagger/routes/linha.js',
    'swagger/routes/parada.js',
    'swagger/routes/veiculo.js',
    'swagger/routes/posicaoVeiculo.js',
  ],
};
