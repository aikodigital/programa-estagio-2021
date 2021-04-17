const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');
/**
 * @swagger
 * components:
 *   schemas:
 *     Parada:
 *       type: object
 *       required:
 *         - name
 *         - longitude
 *         - latitude
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the parada
 *         name:
 *           type: string
 *           description: The parada name
 *         longitude:
 *           type: float
 *           description: The longitude value
 *         latitude:
 *           type: float
 *           description: The latitude value
 *         createdAt:
 *           type: timestamp
 *           description: The time of creation
 *         updatedAt:
 *           type: timestamp
 *           description: The time of last update
 *       example:
 *         id: 1
 *         name: centro
 *         longitude: 12.36
 *         latitude: 9.25
 *         createdAt: "2021-04-15T21:14:47.876Z"
 *         updatedAt: "2021-04-15T22:15:48.876Z"
 */
const Parada = sequelize.define('Paradas', {
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	latitude: {
		type: DataTypes.FLOAT,
		allowNull: false,

	},
	longitude: {
		type: DataTypes.FLOAT,
		allowNull: false,
	}
});

module.exports = Parada;