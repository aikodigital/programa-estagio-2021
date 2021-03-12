import Veiculo from '../models/Veiculo';

class VeiculoController {
  async store(req, res) {
    try {
      const veiculo = await Veiculo.create(req.body);

      return res.status(200).json(veiculo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async index(req, res) {
    try {
      const veiculos = await Veiculo.findAll({
        attributes: ['id', 'name', 'modelo'],
        order: [['id', 'ASC']],
      });

      if (!veiculos)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de veículos.' });

      return res.status(200).json(veiculos);
    } catch (e) {
      throw new Error(e);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.query;
      const veiculo = await Veiculo.findByPk(id, {
        attributes: ['id', 'name', 'modelo'],
      });

      if (!veiculo)
        return res.status(400).json({ msg: 'Veículo não encontrado' });

      return res.status(200).json(veiculo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const veiculo = await Veiculo.findByPk(id);

      const veiculoAtualizado = await veiculo.update(req.body);

      return res.status(200).json(veiculoAtualizado);
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const veiculo = await Veiculo.findByPk(id);

      await veiculo.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new VeiculoController();
