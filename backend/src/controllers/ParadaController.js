import Parada from '../models/Parada';

class ParadaController {
  /**
   * @swagger
   * /parada/store:
   *  post:
   *    description: Use para cadastrar uma nova parada
   *    tags: [Parada]
   *    parameters:
   *      - name: body
   *        in: body
   *        description: Objeto com informações da parada
   *        required: true
   *        schema:
   *          type: object
   *          format: object
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */

  /**
   * @swagger
   * /parada/index:
   *  get:
   *    description: Use para listar todas as paradas
   *    tags: [Parada]
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */

  /**
   * @swagger
   * /parada/show:
   *  get:
   *    description: Use para listar uma parada
   *    tags: [Parada]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da parada
   *        required: true
   *        schema:
   *          type: integer
   *          format: integer
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */

  /**
   * @swagger
   * /parada/update:
   *  put:
   *    description: Use para alterar os dados de uma parada
   *    tags: [Parada]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da linha
   *        required: false
   *        schema:
   *          type: integer
   *          format: integer
   *      - name: body
   *        in: body
   *        description: Objeto com informações da parada
   *        required: true
   *        schema:
   *          type: object
   *          format: object
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */

  /**
   * @swagger
   * /parada/delete:
   *  delete:
   *    description: Use para deletar uma parada existente
   *    tags: [Parada]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da parada
   *        required: true
   *        schema:
   *          type: integer
   *          format: integer
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */
  async store(req, res) {
    try {
      const parada = await Parada.create(req.body);

      return res.status(200).json(parada);
    } catch (e) {
      throw new Error(e);
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
      throw new Error(e);
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
      throw new Error(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const parada = await Parada.findByPk(id);

      const paradaAtualizada = await parada.update(req.body);

      return res.status(200).json(paradaAtualizada);
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const parada = await Parada.findByPk(id);

      await parada.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      throw new Error(e);
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
      throw new Error(e);
    }
  }
}

export default new ParadaController();
