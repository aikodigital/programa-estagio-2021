const Linhas = require('../models/Linhas');
const Veiculos = require('../models/Veiculo');

class VeiculoController {

    //CREATE
    async add(req, res) {

        const veiculo = await Veiculos.create(req.body);
        return res.json(veiculo)
    }

    //LISTAR TODOS
    async index(req, res) {

        const veiculos = await Veiculos.findAll({

            attributes: [
                'id', 'name', 'modelo'
            ],
            include: [
                {
                    model: Linhas,
                    as: 'linha',
                    attributes: ['name']
                }
            ]

        });
        return res.json(veiculos);
    }

    //EDITAR
    async update(req, res) {

        let veiculo = await Veiculos.findByPk(req.params.id)
        veiculo = await veiculo.update(req.body)
        return res.json(veiculo)
    }

    //DELETE
    async delete(req, res) {

        let veiculo = await Veiculo.findByPk(req.params.id)
        veiculo = await veiculo.destroy(req.body)
        return res.json(veiculo)
    }

    //LISTAGEM POR ID
    async show(req, res) {

        let veiculo = await Veiculo.findByPk(req.params.id, {

            attributes: [
                'id', 'name', 'modelo'
            ],
            include: [
                {
                    model: Linhas,
                    as: 'linha',
                    attributes: ['name']
                }
            ]

        })
        return res.json(veiculo)
    }
}

module
module.exports = new VeiculoController();