import Parada from '../models/Parada';

class ParadasLinhasController {
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

  async cadastrarLinhaEmParada(req, res) {
    try {
      const { linha_id: linhaId, parada_id: paradaId } = req.query;

      const parada = await Parada.findByPk(paradaId);

      await parada.addLinhas(linhaId);

      return res
        .status(200)
        .json({ msg: 'A linha foi registrada na parada com sucesso.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ParadasLinhasController();
