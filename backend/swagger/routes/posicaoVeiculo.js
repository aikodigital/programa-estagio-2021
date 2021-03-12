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
