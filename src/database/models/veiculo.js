const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');
/**
 * @swagger
 * components:
 *   schemas:
 *     Veiculo:
 *       type: object
 *       required:
 *         - name
 *         - model
 *         - LinhaId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the veiculo
 *         name:
 *           type: string
 *           description: The veiculo name
 *         model:
 *           type: string
 *           description: The veiculo model
 *         LinhaId:
 *           type: integer
 *           description: The linhaId value
 *         createdAt:
 *           type: timestamp
 *           description: The time of creation
 *         updatedAt:
 *           type: timestamp
 *           description: The time of last update
 *       example:
 *         id: 1
 *         name: "Fiat"
 *         model: "Uno"
 *         LinhaId: 1
 *         createdAt: "2021-04-15T21:14:47.876Z"
 *         updatedAt: "2021-04-15T22:15:48.876Z"
 */
const Veiculo = sequelize.define('Veiculos', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	model: {
		type: DataTypes.STRING,
		allowNull: false,
	}
});

module.exports = Veiculo;