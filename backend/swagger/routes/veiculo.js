/**
 * @swagger
 * /veiculo/store:
 *  post:
 *    description: Use para cadastrar um novo veículo
 *    tags: [Veiculo]
 *    requestBody:
 *      description: Request body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              modelo:
 *                type: string
 *              linha_id:
 *                type: integer
 *
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              modelo:
 *                type: string
 *              linha_id:
 *                type: integer
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
 *    requestBody:
 *      description: Request body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              modelo:
 *                type: string
 *              id_linha:
 *                type: integer
 *
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              modelo:
 *                type: string
 *              id_linha:
 *                type: integer
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
