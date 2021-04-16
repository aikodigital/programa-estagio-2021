const { DataTypes } = require('sequelize');
const sequelize = require('../connection/sequelize');
/**
 * @swagger
 * components:
 *   schemas:
 *     Linha:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the linha
 *         name:
 *           type: string
 *           description: The linha name
 *         createdAt:
 *           type: timestamp
 *           description: The time of creation
 *         updatedAt:
 *           type: timestamp
 *           description: The time of last update
 *       example:
 *         id: 1
 *         name: "101"
 *         createdAt: "2021-04-15T21:14:47.876Z"
 *         updatedAt: "2021-04-15T22:15:48.876Z"
 */
const Linha = sequelize.define('Linhas', {
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	}
});
module.exports = Linha;