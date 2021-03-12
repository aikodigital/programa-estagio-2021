/**
 * @swagger
 * /linha/store:
 *  post:
 *    description: Use para cadastrar uma nova linha
 *    tags: [Linha]
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Nome da linha
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 *      '400':
 *        description: Falha na requisição
 */

/**
 * @swagger
 * /linha/index:
 *  get:
 *    description: Use para listar todas as linhas
 *    tags: [Linha]
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 *      '400':
 *        description: Falha na requisição
 */

/**
 * @swagger
 * /linha/show:
 *  get:
 *    description: Use para cadastrar uma nova linha
 *    tags: [Linha]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id da linha
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
 * /linha/update:
 *  put:
 *    description: Use para alterar os dados de uma linha existente
 *    tags: [Linha]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id da linha
 *        required: true
 *        schema:
 *          type: integer
 *          format: integer
 *      - name: name
 *        in: body
 *        description: Nome da linha
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Requisição bem sucedida
 *      '400':
 *        description: Falha na requisição
 */

/**
 * @swagger
 * /linha/delete:
 *  delete:
 *    description: Use para deletar uma linha existente
 *    tags: [Linha]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id da linha
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
 * /linha/veiculosPorLinha:
 *  get:
 *    description: Use para exibir todos os veiculos associados a uma linha
 *    tags: [Linha]
 *    parameters:
 *      - name: id
 *        in: query
 *        description: Id da linha
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
