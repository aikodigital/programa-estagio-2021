import Linha from '../models/Linha';

class LinhaController {
  async store(req, res) {
    try {
      const linha = await Linha.create(req.body);

      return res.status(200).json(linha);
    } catch (e) {
      throw new Error(e);
    }
  }

  async index(req, res) {
    try {
      const linhas = await Linha.findAll({
        attributes: ['id', 'name'],
      });

      if (!linhas)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de linhas.' });

      return res.status(200).json(linhas);
    } catch (e) {
      throw new Error(e);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.query;
      const linha = await Linha.findByPk(id, {
        attributes: ['id', 'name'],
      });

      if (!linha) return res.status(400).json({ msg: 'Linha não encontrada' });

      return res.status(200).json(linha);
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const linha = await Linha.findByPk(id);

      const linhaAtualizada = await linha.update(req.body);

      return res.status(200).json(linhaAtualizada);
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const linha = await Linha.findByPk(id);

      await linha.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new LinhaController();
