import Parada from '../models/Parada';

class ParadaController {
  async store(req, res) {
    try {
      const parada = await Parada.create(req.body);

      return res.status(200).json(parada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const paradas = await Parada.findAll();

      if (!paradas)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de paradas.' });

      return res.status(200).json(paradas);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.query;
      const parada = await Parada.findByPk(id, {
        attributes: ['id', 'name', 'latitude', 'longitude'],
      });

      if (!parada)
        return res.status(400).json({ msg: 'Parada não encontrada' });

      return res.status(200).json(parada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const parada = await Parada.findByPk(id);

      const paradaAtualizada = await parada.update(req.body);

      return res.status(200).json(paradaAtualizada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const parada = await Parada.findByPk(id);

      await parada.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Linhas por Parada: Recebe o identificador de uma parada e retorna as linhas associadas a parada informada
  async linhasPorParada(req, res) {
    try {
      const { id } = req.query;

      const linhasDeParada = await Parada.findByPk(id, {
        attributes: ['id', ['name', 'paradaName'], 'latitude', 'longitude'],
        include: {
          association: 'linhas',
          attributes: ['id', ['name', 'linhaName']],
          through: { attributes: [] },
        },
      });

      if (!linhasDeParada)
        return res
          .status(400)
          .json({ msg: 'A parada com o id informado não existe.' });

      return res.status(200).json(linhasDeParada);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ParadaController();
