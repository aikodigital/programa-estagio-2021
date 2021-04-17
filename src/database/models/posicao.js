const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');
/**
 * @swagger
 * components:
 *   schemas:
 *     Posicao:
 *       type: object
 *       required:
 *         - longitude
 *         - latitude
 *         - VeiculoId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the posicao
 *         longitude:
 *           type: float
 *           description: The longitude value
 *         latitude:
 *           type: float
 *           description: The latitude value
 *         VeiculoId:
 *           type: integer
 *           description: The veiculoId value
 *         createdAt:
 *           type: timestamp
 *           description: The time of creation
 *         updatedAt:
 *           type: timestamp
 *           description: The time of last update
 *       example:
 *         id: 1
 *         longitude: 12.36
 *         latitude: 9.25
 *         VeiculoId: 1
 *         createdAt: "2021-04-15T21:14:47.876Z"
 *         updatedAt: "2021-04-15T22:15:48.876Z"
 */
const Posicao = sequelize.define('Posicoes', {
	latitude: {
		type: DataTypes.FLOAT,
		allowNull: false,

	},
	longitude: {
		type: DataTypes.FLOAT,
		allowNull: false,
	}
});

module.exports = Posicao;