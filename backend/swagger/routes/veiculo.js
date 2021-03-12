/**
 * @swagger
 * /veiculo/store:
 *  post:
 *    description: Use para cadastrar um novo veículo
 *    tags: [Veiculo]
 *    parameters:
 *      - name: body
 *        in: body
 *        description: Objeto com informações do veículo
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
 * /veiculo/index:
 *  get:
 *    description: Use para listar todos os veículos
 *    tags: [Veiculo]
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 *      '400':
 *        description: Falha na requisição
 */

/**
 * @swagger
 * /veiculo/show:
 *  get:
 *    description: Use para listar um veículo
 *    tags: [Veiculo]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id do veículo
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
 * /veiculo/update:
 *  put:
 *    description: Use para alterar os dados de um veículo
 *    tags: [Veiculo]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id do veículo
 *        required: false
 *        schema:
 *          type: integer
 *          format: integer
 *      - name: body
 *        in: body
 *        description: Objeto com informações do veículo
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
 * /veiculo/delete:
 *  delete:
 *    description: Use para deletar um veículo existente
 *    tags: [Veiculo]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id do veículo
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
