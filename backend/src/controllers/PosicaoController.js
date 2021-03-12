import PosicaoVeiculo from '../models/PosicaoVeiculo';

class PosicaoVeiculoController {
  /**
   * @swagger
   * /posicaoveiculo/store:
   *  post:
   *    description: Use para registar a posição de um veículo
   *    tags: [Posição veiculo]
   *    parameters:
   *      - name: body
   *        in: body
   *        description: Objeto com informações da posição de um veículo
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
   * /posicaoveiculo/index:
   *  get:
   *    description: Use para listar todas as posições de veículos
   *    tags: [Posição veiculo]
   *    responses:
   *      '200':
   *        description: Requisição bem sucedida
   *      '400':
   *        description: Falha na requisição
   */

  /**
   * @swagger
   * /posicaoveiculo/show:
   *  get:
   *    description: Use para listar a posição de um veículo
   *    tags: [Posição veiculo]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da posição
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
   * /posicaoveiculo/update:
   *  put:
   *    description: Use para alterar os dados de uma posição
   *    tags: [Posição veiculo]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da posição do veículo
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
   * /posicaoveiculo/delete:
   *  delete:
   *    description: Use para deletar uma posição de veículo existente
   *    tags: [Posição veiculo]
   *    parameters:
   *      - name: id
   *        in: query
   *        description: Id da posição do veículo
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
      const posicaoVeiculo = await PosicaoVeiculo.create(req.body);

      return res.status(200).json(posicaoVeiculo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async index(req, res) {
    try {
      const posicaoVeiculo = await PosicaoVeiculo.findAll({
        attributes: ['id', 'latitude', 'longitude', 'veiculo_id'],
        order: [['id', 'ASC']],
      });

      if (!posicaoVeiculo)
        return res
          .status(400)
          .json({ msg: 'Não existem registros de de posições de veículos.' });

      return res.status(200).json(posicaoVeiculo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.query;

      const posicaoVeiculo = await PosicaoVeiculo.findByPk(id, {
        attributes: ['id', 'latitude', 'longitude', 'veiculo_id'],
      });

      if (!posicaoVeiculo)
        return res
          .status(400)
          .json({ msg: 'Posição de veículo não encontrada' });

      return res.status(200).json(posicaoVeiculo);
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.query;
      const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

      const posicaoAtualizada = await posicaoVeiculo.update(req.body);

      return res.status(200).json(posicaoAtualizada);
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.query;
      const posicaoVeiculo = await PosicaoVeiculo.findByPk(id);

      await posicaoVeiculo.destroy();

      return res.status(200).json({ msg: 'Registro deletado com sucesso.' });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new PosicaoVeiculoController();
