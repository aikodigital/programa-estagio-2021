const route = require('express')();
const { Op } = require('sequelize');
/*const Veiculo  = require('../database/models/veiculo');
const Linha  = require('../database/models/linha');*/
const { Veiculo, Linha } = require('../database/relations');
/**
 * @swagger
 * tags:
 *   name: Veiculo
 *   description: The Veiculo CRUD managing API
 */
/**
 * @swagger
 * /veiculo?id=1:
 *   get:
 *     summary: Returns veiculo by id from table Veiculos
 *     tags: [Veiculo]
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
 *               $ref: '#/components/schemas/Veiculo'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.get('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const veiculo = await Veiculo.findOne({ where: { id: { [Op.eq]: id } } });
		if (veiculo) {
			res.json(veiculo);
		} else {//veiculo==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field id' });
	}
});
/**
 * @swagger
 * /veiculo/all:
 *   get:
 *     summary: Returns the list of all veiculo on table
 *     tags: [Veiculo]
 *     responses:
 *       200:
 *         description: The veiculo by id from table Veiculo
 *         content:
 *           application/json:
 *             anyOf:
 *               schema:
 *                 type: array
 *                 items:
 *                    $ref: '#/components/schemas/Veiculo' 
 */
route.get('/all', async (req, res) => {
	const veiculo = await Veiculo.findAll();
	res.json(veiculo);
});

/**
 * @swagger
 * /veiculo?name=Fiat&model=Uno&linhaId=1:
 *   post:
 *     summary: Returns veiculos by id from table Veiculos
 *     tags: [Veiculo]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *       - in: query
 *         name: model
 *         required: true
 *       - in: query
 *         name: linhaId
 *         required: true
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Veiculo'
 *       400:
 *         description: Bad Request
 *       422:
 *         description: Unprocessable entity
 */
route.post('/', async (req, res) => {
	const { name, model, linhaId } = req.query;
	if (name && model && linhaId) {
		if (isNaN(linhaId)) {
			res.status(400).json({ 'message': 'linhaId must be type of number' });
		}
		const linha = await Linha.findOne({ where: { id: { [Op.eq]: linhaId } } });
		if (linha) {
			const veiculo = await Veiculo.create({ name: name, model: model });
			await linha.addVeiculos(veiculo);
			await veiculo.reload();
			res.status(201).json(veiculo);
		} else {
			res.status(422).json({ 'message': 'linha does not exists' });
		}

	} else {
		res.status(400).json({ 'message': 'query string require fields (name, model, linhaId)' });
	}
});
/**
 * @swagger
 * /veiculo?id=1&name=Fiat&model=Uno:
 *   put:
 *     summary: Returns veiculos by id from table Veiculos
 *     tags: [Veiculo]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *       - in: query
 *         name: name
 *         required: true
 *       - in: query
 *         name: model
 *         required: true
 *       - in: query
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Veiculo'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 *       422:
 *         description: Unprocessable entity
 */
route.put('/', async (req, res) => {
	const { id, name, model } = req.query;
	if (id && (name || model)) {
		const veiculo = await Veiculo.findOne({ where: { id: { [Op.eq]: id } } });
		if (veiculo) {
			if (name) { veiculo.name = name; }
			if (model) { veiculo.model = model; }
			veiculo.save().then(e => res.json(e)).catch(() => res.status(422).send());
		} else {
			res.status(204).send();
		}
	} else {
		res.status(400).json({ 'message': 'query string requires id and at last one of this fields(latitude, longitude)' });
	}
});
/**
 * @swagger
 * /veiculo?id=1:
 *   delete:
 *     summary: Returns veiculo by id from table Veiculos
 *     tags: [Veiculo]
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
 *               $ref: '#/components/schemas/Veiculo'
 *       204:
 *         description: No Content
 *       400:
 *         description: Bad Request
 */
route.delete('/', async (req, res) => {
	const { id } = req.query;
	if (id) {
		const veiculo = await Veiculo.findOne({ where: { id: { [Op.eq]: id } } });
		if (veiculo) {
			veiculo.destroy().then(() => res.json(veiculo)).catch(() => res.status(422).send());
		} else {//linha==null
			res.status(204).send();//response if not found
		}
	} else {
		res.status(400).json({ 'message': 'query string require field id' });
	}
});


module.exports = route;
