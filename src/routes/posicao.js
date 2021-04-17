const route = require('express')();
const { Op } = require('sequelize');
const { Posicao } = require('../database/relations');
const { Veiculo } = require('../database/relations');
/**
 * @swagger
 * tags:
 *   name: Posicao
 *   description: The Posicao CRUD managing API
 */
/**
 * @swagger
 * /posicao?id=1:
 *   get:
 *     summary: Returns posicao by id from table Posicaos
 *     tags: [Posicao]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Posicao'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.get('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const posicao = await Posicao.findOne({ where: { id: { [Op.eq]: id } } });
		if (posicao) {
			res.json(posicao);
		} else {//posicao==null
			res.send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field id' });
	}
});
/**
 * @swagger
 * /posicao/all:
 *   get:
 *     summary: Returns the list of all posicoes on table
 *     tags: [Posicao]
 *     responses:
 *       200:
 *         description: The posicao by id from table Posicao
 *         content:
 *           application/json:
 *             anyOf:
 *               schema:
 *                 type: array
 *                 nullable: true
 *                 items:
 *                    $ref: '#/components/schemas/Posicao'
 */
route.get('/all', async (req, res) => {
	const posicao = await Posicao.findAll();
	res.json(posicao);
});
/**
 * @swagger
 * /posicao?latitude=12.33&longitude=9.12&veiculoId=1:
 *   post:
 *     summary: Returns posicao created
 *     tags: [Posicao]
 *     parameters:
 *       - in: query
 *         name: latitude
 *         required: true
 *       - in: query
 *         name: longitude
 *         required: true
 *       - in: query
 *         name: veiculoId
 *         required: true
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Posicao'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "query string require fields (veiculoId, latitude, longitude)"
 *       422:
 *         description: Unprocessable entity
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: "explain whats happen"
 *               
 */
route.post('/', async (req, res) => {
	const { latitude, longitude, veiculoId } = req.query;
	if (latitude && longitude && veiculoId) {
		if (isNaN(latitude) || isNaN(longitude) || isNaN(veiculoId)) {
			res.status(400).json({ 'message': 'fields must be type of number' });
		} else {
			const veiculo = await Veiculo.findOne({ where: { id: { [Op.eq]: veiculoId } } });
			if (veiculo) {
				const posicao = await Posicao.create({ latitude: latitude, longitude: longitude });
				await veiculo.addPosicoes(posicao);
				await posicao.reload();
				res.status(201).json(posicao);
			} else {
				res.status(422).json({ 'message': 'veiculo does not exists' });
			}
		}
	} else {
		res.status(400).json({ 'message': 'query string require fields (veiculoId, latitude, longitude)' });
	}
});
/**
 * @swagger
 * /posicao?id=1&latitude=13.33&longitude=10.12:
 *   put:
 *     summary: Returns posicao by id from table Posicaos
 *     tags: [Posicao]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: latitude
 *         required: false
 *       - in: query
 *         name: longitude
 *         required: false
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Posicao'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.put('/', async (req, res) => {
	const { id, latitude, longitude } = req.query;
	if (id && (latitude || longitude)) {
		if ((isNaN(latitude) && latitude != undefined) || (isNaN(longitude) && longitude != undefined)) {
			res.status(400).json({ 'message': 'latitude and longitude must be type of number' });
		} else {
			const posicao = await Posicao.findOne({ where: { id: { [Op.eq]: id } } });
			if (posicao) {
				if (latitude) { posicao.latitude = latitude; }
				if (longitude) { posicao.longitude = longitude; }
				posicao.save().then(e => res.json(e)).catch(() => res.status(422).send());
			} else {
				res.status(204).send();
			}
		}
	} else {
		res.status(400).json({ 'message': 'query string requires id and at last one of this fields(latitude, longitude)' });
	}
});
/**
 * @swagger
 * /posicao?id=1:
 *   delete:
 *     summary: Returns posicao by id from table Posicao
 *     tags: [Posicao]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Posicao'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.delete('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const posicao = await Posicao.findOne({ where: { id: { [Op.eq]: id } } });
		if (posicao) {
			posicao.destroy().then(() => res.json(posicao)).catch(() => res.status(422).send());
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string requires field id' });
	}
});

module.exports = route;
