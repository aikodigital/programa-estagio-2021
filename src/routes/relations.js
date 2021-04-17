const route = require('express')();
const { Op } = require('sequelize');
const { Linha, Parada } = require('../database/relations');
/**
 * @swagger
 * tags:
 *   name: Relations
 *   description: The Relations CRUD managing API
 */
/**
 * @swagger
 * /relations/linha/veiculos?linhaId=1:
 *   get:
 *     summary: Returns posicao by id from table Posicaos
 *     tags: [Relations]
 *     parameters:
 *       - in: query
 *         name: linhaId
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Relations'
 *       204:
 *         description: No Content
 */
route.get('/linha/veiculos', async (req, res) => {
	const { linhaId } = req.query;
	if (!(isNaN(linhaId) || linhaId == '')) {
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: linhaId } } });
		if (linha) {
			const veiculos = await linha.getVeiculos();
			res.json(veiculos);
		} else {//linha==null
			res.send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field paradaId' });
	}
});
/**
 * @swagger
 * /relations/parada/linhas?paradaId=1:
 *   get:
 *     summary: Returns the list of all Relations on table by id
 *     tags: [Relations]
 *     parameters:
 *       - in: query
 *         name: paradaId
 *         required: true
 *     responses:
 *       200:
 *         description: The relation by id from table Relations
 *         content:
 *           application/json:
 *             anyOf:
 *               schema:
 *                 type: array
 *                 nullable: true
 *                 items:
 *                    $ref: '#/components/schemas/Relations'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.get('/parada/linhas', async (req, res) => {
	const { paradaId } = req.query;
	if (!(isNaN(paradaId) || paradaId == '')) {
		const parada = await Parada.findOne({ where: { id: { [Op.eq]: paradaId } } });
		if (parada) {
			const linhas = await parada.getLinhas();
			res.json(linhas);
		} else {//posicao==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field paradaId' });
	}
});
/**
 * @swagger
 * /relations/linha_parada?linhaId=1?paradaId=1:
 *   post:
 *     summary: Returns relation by id from table Relations
 *     tags: [Relations]
 *     parameters:
 *       - in: query
 *         name: linhaId
 *         type: integer
 *         required: true
 *       - in: query
 *         name: paradaId
 *         type: integer
 *         required: true
 *     responses:
 *       201:
 *         description: Success
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 *       409:
 *         description: Already exists(Conflict)
 *       422:
 *         description: Unprocessable entity
 */
route.post('/linha_parada', async (req, res) => {
	const { linhaId, paradaId } = req.query;
	if (!(isNaN(linhaId) || linhaId == '' || isNaN(paradaId) || paradaId == '')) {//if receives '' is a bad request
		//const relation = await LinhaParadas.findOne({where:{LinhaId:{[Op.eq]:linhaId},ParadaId:{[Op.eq]:paradaId}}});
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: linhaId } } });
		const parada = await Parada.findOne({ where: { id: { [Op.eq]: paradaId } } });
		if (linha && parada) {
			if (!await linha.hasParada(parada)) {
				await linha.addParada(parada);
				res.status(201).send();
			} else {
				res.status(409).json({ 'message': 'relation alreary exists' });
			}
		} else {
			res.status(422).json({ 'message': 'linha or parada does not exists' });
		}
	} else {
		res.status(400).json({ 'message': 'query string requires fields (linhaId, paradaId) of type integer' });
	}
});

module.exports = route;
