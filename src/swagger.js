const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const Port = process.env.PORT || 3000;
const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Aiko API',
			version: '1.0.0',
			description: 'Documentanion for Express API',
		},
		servers: [
			{
				url: 'http://localhost:' + Port,
			},
		],
	},
	apis: ['./src/routes/*.js', './src/database/models/*.js'],
	schemas: []
};
const specs = swaggerJsDoc(options);
const swaggerServe = swaggerUI.serve;
const swaggerSetup = swaggerUI.setup(specs);
module.exports = { swaggerServe, swaggerSetup };
