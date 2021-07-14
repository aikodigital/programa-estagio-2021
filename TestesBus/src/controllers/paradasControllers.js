const Linhas = require('../models/Linhas');
const Parada = require('../models/Parada');

class ParadaController {

  //CREATE
    async add(req, res) {

      const parada = await Parada.create(req.body);
      return res.json(parada)
    }

    //LISTAR TODOS
    async index(req, res) {

      const paradas = await Parada.findAll();
      return res.json(paradas);
    }

    //EDITAR
    async update(req, res) {

      let parada = await Parada.findByPk(req.params.id)
      parada = await parada.update(req.body)
      return res.json(parada)
    }

    //DELETE
    async delete(req, res) {

      let parada = await Parada.findByPk(req.params.id)
      parada = await parada.destroy(req.body)
      return res.json(parada)
    }

    //LISTAGEM POR ID
    async show(req, res) {

      let parada = await Parada.findByPk(req.params.id, {
        attributes: [
          'id','name', 'latitude', 'longitude'
      ],
      include: [
          { 
              model: Linhas,
              as: 'linha',
              attributes: ['name']
          }
      ]
      })
      return res.json(parada)
    }
  }
   
  module
  module.exports = new ParadaController();