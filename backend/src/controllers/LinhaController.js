import Linha from '../models/Linha';

class LinhaController {
  async store(req, res) {
    try {
      const linha = await Linha.create(req.body);

      return res.status(200).json(linha);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
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
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
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
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const linha = await Linha.findByPk(id);

      const linhaAtualizada = await linha.update(req.body);

      return res.status(200).json(linhaAtualizada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const linha = await Linha.findByPk(id);

      await linha.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Veiculos por Linha: Recebe o identificador de uma linha e retorna os veículos associados a linha informada
  async veiculosPorLinha(req, res) {
    try {
      const { id } = req.query;

      const veiculosDaLinha = await Linha.findByPk(id, {
        attributes: ['id', ['name', 'linhaName']],
        include: {
          association: 'veiculos',
          attributes: ['id', ['name', 'veiculoName'], 'modelo', 'linha_id'],
        },
      });

      if (!veiculosDaLinha)
        return res
          .status(400)
          .json({ msg: 'A linha com o id informado não existe.' });

      return res.status(200).json(veiculosDaLinha);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new LinhaController();
