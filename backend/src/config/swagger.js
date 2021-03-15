module.exports = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'API backend Aiko',
      description: 'API semelhante à olho vivo',
      contact: {
        name: 'Paulo Sérgio',
      },
      servers: ['http://localhost:3333'],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['swagger/routes/*.js'],
};
