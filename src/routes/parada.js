const route = require('express')();
const { Op } = require('sequelize');
const { Parada } = require('../database/relations');
/**
 * @swagger
 * tags:
 *   name: Parada
 *   description: The Parada CRUD managing API
 */
/**
 * @swagger
 * /parada?id=1:
 *   get:
 *     summary: Returns parada by id from table Paradas
 *     tags: [Parada]
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
 *               $ref: '#/components/schemas/Parada'
 *       204:
 *         description: No Content
 */
route.get('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const parada = await Parada.findOne({ where: { id: { [Op.eq]: id } } });
		if (parada) {
			res.json(parada);
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field id' });
	}
});
/**
 * @swagger
 * /parada/all:
 *   get:
 *     summary: Returns the list of all the paradas
 *     tags: [Parada]
 *     responses:
 *       200:
 *         description: The linha by id from table Paradas
 *         content:
 *           application/json:
 *             anyOf:
 *               schema:
 *                 type: array
 *                 nullable: true
 *                 items:
 *                    $ref: '#/components/schemas/Parada'
 */
route.get('/all', async (req, res) => {
	const parada = await Parada.findAll();
	res.json(parada);
});

/**
 * @swagger
 * /parada?name=centro&latitude=12.33&longitude=9.12:
 *   post:
 *     summary: Returns parada created
 *     tags: [Parada]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *       - in: query
 *         name: latitude
 *         required: true
 *       - in: query
 *         name: longitude
 *         required: true
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               nullable: true
 *               $ref: '#/components/schemas/Parada'
 *       204:
 *         description: No Content
 */
route.post('/', async (req, res) => {
	const { name, latitude, longitude } = req.query;
	if (name && latitude && longitude) {
		if (isNaN(latitude) || isNaN(longitude)) {
			res.status(400).json({ 'message': 'latitude and longitude must be type of number' });
		} else {
			const [parada, created] = await Parada.findOrCreate({ where: { name: { [Op.eq]: name } }, defaults: { name: name, latitude: latitude, longitude: longitude } });
			if (created) {
				res.json(parada);
			} else {
				res.status(204).send();
			}
		}
	} else {
		res.status(400).json({ 'message': 'query string require fields name, latitude and longitude' });
	}
});
/**
 * @swagger
 * /parada?id=1&name=102&latitude=10.33&longitude=8.12:
 *   put:
 *     summary: Returns parada by id from table Paradas
 *     tags: [Parada]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: name
 *         required: false
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
 *               $ref: '#/components/schemas/Parada'
 *       204:
 *         description: No Content
 */
route.put('/', async (req, res) => {
	const { id, name, latitude, longitude } = req.query;
	if (id && (name || latitude || longitude)) {
		if ((isNaN(latitude) && latitude != undefined) || (isNaN(longitude) && longitude != undefined)) {
			res.status(400).json({ 'message': 'latitude and longitude must be type of number' });
		} else {
			const parada = await Parada.findOne({ where: { id: { [Op.eq]: id } } });
			if (parada) {
				if (name) { parada.name = name; }
				if (latitude) { parada.latitude = latitude; }
				if (longitude) { parada.longitude = longitude; }
				parada.save().then(e => res.json(e)).catch(() => res.status(422).send());
			} else {
				res.status(204).send();
			}
		}
	} else {
		res.status(400).json({ 'message': 'query string requires id and at last one of this fields(name, latitude, longitude)' });
	}
});
/**
 * @swagger
 * /parada?id=1:
 *   delete:
 *     summary: Returns parada by id from table Paradas
 *     tags: [Parada]
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
 *               $ref: '#/components/schemas/Parada'
 *       204:
 *         description: No Content
 */
route.delete('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const parada = await Parada.findOne({ where: { id: { [Op.eq]: id } } });
		if (parada) {
			parada.destroy().then(() => res.json(parada)).catch(() => res.status(422).send());
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string requires field id' });
	}
});

module.exports = route;
