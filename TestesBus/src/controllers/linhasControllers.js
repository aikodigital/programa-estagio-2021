const Linha = require("../models/Linhas");
const Parada = require('../models/Parada');
const Veiculo = require("../models/Veiculo");

class LinhaController {

  //CREATE
    async add(req, res) {
      const linha = await Linha.create(req.body);
      return res.json(linha)
    }

    //LISTAGEM DE LINHAS
    async index(req, res) {
      const linha = await Linha.findAll({
          attributes: [
              'id','name'
          ],
          include: [
              { 
                  model: Parada,
                  as: 'parada',
                  attributes: ['name']
              }
          ]
      });
      return res.json(linha)
    }

    //EDITAR
    async update(req, res) {
      let linha = await Linha.findByPk(req.params.id)
      linha = await linha.update(req.body)
      return res.json(linha)
    }

    //DELETE
    async delete(req, res) {
      let linha = await Linha.findByPk(req.params.id)
      linha = await linha.destroy(req.body)
      return res.json(linha)
    }

    //LISTAGEM POR ID
    async show(req, res) {
      let linha = await Linha.findByPk(req.params.id, {
          attributes: [
              'id','name'
          ],
          include: [
              { 
                  model: Parada,
                  as: 'parada'
              }
          ],
          include: [
            { 
                model: Veiculo,
                as: 'veiculo',
                attributes: ['name']
            }
        ]
      })
      return res.json(linha)
    }
  }
   
  module.exports = new LinhaController();