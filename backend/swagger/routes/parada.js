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

/**
 * @swagger
 * /parada/linhasdaparada:
 *  get:
 *    description: Use para listar todas as linhas de uma parada
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
