const route = require('express')();
const { Op } = require('sequelize');
const { Linha } = require('../database/relations');

/**
 * @swagger
 * tags:
 *   name: Linha
 *   description: The Linha CRUD managing API
 */

/**
 * @swagger
 * /linha?id=1:
 *   get:
 *     summary: Returns linha by id from table Linhas
 *     tags: [Linha]
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
 *               $ref: '#/components/schemas/Linha'
 *       204:
 *         description: No Content
 */
route.get('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: id } } });
		if (linha) {
			res.json(linha);
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field id' });
	}
});
/**
 * @swagger
 * /linha/all:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Linha]
 *     responses:
 *       200:
 *         description: The linha by id from table Linhas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               nullable: true
 *               items:
 *                  $ref: '#/components/schemas/Linha'
 */
route.get('/all', async (req, res) => {
	const linha = await Linha.findAll();
	res.json(linha);
});
/**
 * @swagger
 * /linha?name=101:
 *   post:
 *     summary: Return linha created
 *     tags: [Linha]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Linha'
 *       204:
 *         description: No Content
 */
route.post('/', async (req, res) => {
	const { name } = req.query;
	if (name) {
		const [linha, created] = await Linha.findOrCreate({ where: { name: { [Op.eq]: name } }, defaults: { name: name } });
		if (created) {
			res.status(201).json(linha);
		} else {
			res.status(409).send();
		}
	} else {
		res.status(400).json({ 'message': 'query string require field name' });
	}
});
/**
 * @swagger
 * /linha?id=1&name=102:
 *   put:
 *     summary: Returns linha by id from table Linhas
 *     tags: [Linha]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: name
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Linha'
 *       204:
 *         description: No Content
 */
route.put('/', async (req, res) => {
	const { id, name } = req.query;
	if (id && name) {
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: id } } });
		if (linha) {
			linha.name = name;
			linha.save().then(e => res.json(e)).catch(() => res.status(422).send());
		} else {
			res.status(204).send();
		}
	} else {
		res.status(400).json({ 'message': 'query string requires fields id and name' });
	}
});
/**
 * @swagger
 * /linha?id=1:
 *   delete:
 *     summary: Returns linha by id from table Linhas
 *     tags: [Linha]
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
 *               $ref: '#/components/schemas/Linha'
 *       204:
 *         description: No Content
 */
route.delete('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: id } } });
		if (linha) {
			linha.destroy().then(() => res.json(linha)).catch(() => res.status(422).send());
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string requires field id' });
	}
});

module.exports = route;
